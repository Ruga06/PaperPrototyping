const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const PORT = Number(process.env.PORT || 4174);
const HOST = process.env.HOST || "0.0.0.0";
const ROOT = __dirname;
const DATA_DIR = process.env.DATA_DIR || path.join(ROOT, "data");
const PLAYER_FILE = path.join(DATA_DIR, "players.json");

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

async function ensureStore() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(PLAYER_FILE);
  } catch {
    await fs.writeFile(PLAYER_FILE, "[]", "utf8");
  }
}

async function readPlayers() {
  await ensureStore();
  const text = await fs.readFile(PLAYER_FILE, "utf8");
  const data = JSON.parse(text || "[]");
  return Array.isArray(data) ? data : [];
}

async function writePlayers(players) {
  await ensureStore();
  await fs.writeFile(PLAYER_FILE, `${JSON.stringify(players, null, 2)}\n`, "utf8");
}

function sendJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body is too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function normalizePlayer(input, existingId) {
  const name = String(input.name || "").trim().slice(0, 24);
  if (!name) {
    const error = new Error("Player name is required");
    error.status = 400;
    throw error;
  }

  const skillIds = Array.isArray(input.skillIds)
    ? input.skillIds.map(Number).filter((value) => Number.isFinite(value))
    : [];

  return {
    id: existingId || crypto.randomUUID(),
    name,
    maxHp: Math.max(1, Number(input.maxHp) || 30),
    currentHp: Math.max(0, Number(input.currentHp) || 0),
    attack: Math.max(0, Number(input.attack) || 0),
    skillIds,
    updatedAt: new Date().toISOString(),
  };
}

async function handleApi(req, res, url) {
  if (url.pathname === "/api/health") {
    sendJson(res, 200, { ok: true });
    return;
  }

  if (url.pathname === "/api/players" && req.method === "GET") {
    sendJson(res, 200, await readPlayers());
    return;
  }

  if (url.pathname === "/api/players" && req.method === "POST") {
    const body = JSON.parse(await readBody(req) || "{}");
    const players = await readPlayers();
    const existing = body.id ? players.find((player) => player.id === body.id) : null;
    const player = normalizePlayer(body, existing?.id);
    const nextPlayers = existing
      ? players.map((item) => (item.id === existing.id ? player : item))
      : [...players, player];

    await writePlayers(nextPlayers);
    sendJson(res, existing ? 200 : 201, player);
    return;
  }

  if (url.pathname.startsWith("/api/players/") && req.method === "DELETE") {
    const id = decodeURIComponent(url.pathname.replace("/api/players/", ""));
    const players = await readPlayers();
    await writePlayers(players.filter((player) => player.id !== id));
    sendJson(res, 200, { ok: true });
    return;
  }

  sendJson(res, 404, { error: "Not found" });
}

async function serveStatic(req, res, url) {
  const requestedPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.normalize(path.join(ROOT, requestedPath));

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  try {
    const data = await fs.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": contentTypes[ext] || "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  try {
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url);
      return;
    }

    await serveStatic(req, res, url);
  } catch (error) {
    sendJson(res, error.status || 500, { error: error.message || "Server error" });
  }
});

ensureStore().then(() => {
  server.listen(PORT, HOST, () => {
    console.log(`Battle helper server running at http://localhost:${PORT}`);
  });
});
