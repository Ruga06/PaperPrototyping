const RAW_SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

function normalizeSupabaseUrl(value) {
  return String(value || "")
    .trim()
    .replace(/\/rest\/v1\/?$/i, "")
    .replace(/\/+$/, "");
}

const SUPABASE_URL = normalizeSupabaseUrl(RAW_SUPABASE_URL);

function assertSupabaseConfig() {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    const error = new Error("Supabase environment variables are missing.");
    error.status = 500;
    throw error;
  }

  try {
    const url = new URL(SUPABASE_URL);
    if (url.protocol !== "https:" || !url.hostname.endsWith(".supabase.co")) {
      throw new Error();
    }
  } catch {
    const error = new Error(
      "SUPABASE_URL must look like https://your-project-ref.supabase.co",
    );
    error.status = 500;
    throw error;
  }
}

function supabaseHeaders(extra = {}) {
  assertSupabaseConfig();
  return {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

function toClientPlayer(row) {
  return {
    id: row.id,
    name: row.name,
    maxHp: row.max_hp,
    currentHp: row.current_hp,
    attack: row.attack,
    speed: row.speed || 0,
    coins: row.coins || 0,
    previousJobId: row.previous_job_id || 0,
    isekaiJobId: row.isekai_job_id || 0,
    skillIds: row.skill_ids || [],
    updatedAt: row.updated_at,
  };
}

function toDbPlayer(input) {
  const name = String(input.name || "").trim().slice(0, 24);
  if (!name) {
    const error = new Error("Player name is required.");
    error.status = 400;
    throw error;
  }

  return {
    name,
    max_hp: Math.max(1, Number(input.maxHp) || 30),
    current_hp: Math.max(0, Number(input.currentHp) || 0),
    attack: Math.max(0, Number(input.attack) || 0),
    speed: Math.max(0, Number(input.speed) || 0),
    coins: Math.max(0, Number(input.coins) || 0),
    previous_job_id: Math.max(0, Number(input.previousJobId) || 0),
    isekai_job_id: Math.max(0, Number(input.isekaiJobId) || 0),
    skill_ids: Array.isArray(input.skillIds)
      ? input.skillIds.map(Number).filter((value) => Number.isFinite(value))
      : [],
    updated_at: new Date().toISOString(),
  };
}

async function supabaseFetch(path, options = {}) {
  assertSupabaseConfig();
  const response = await fetch(`${SUPABASE_URL}/rest/v1${path}`, {
    ...options,
    headers: supabaseHeaders(options.headers),
  });

  if (!response.ok) {
    const text = await response.text();
    let message = text || "Supabase request failed.";
    try {
      const parsed = JSON.parse(text);
      message = parsed.message || parsed.error || message;
    } catch {
      // Keep the plain-text response.
    }
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  if (response.status === 204) return null;
  return response.json();
}

function sendJson(res, status, data) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");
  return {};
}

function handleOptions(req, res) {
  if (req.method !== "OPTIONS") return false;
  res.statusCode = 204;
  res.end();
  return true;
}

module.exports = {
  handleOptions,
  parseBody,
  sendJson,
  supabaseFetch,
  toClientPlayer,
  toDbPlayer,
};
