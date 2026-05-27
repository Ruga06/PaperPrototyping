const {
  handleOptions,
  parseBody,
  sendJson,
  supabaseFetch,
  toClientPlayer,
  toDbPlayer,
} = require("./_supabase");

module.exports = async function handler(req, res) {
  if (handleOptions(req, res)) return;

  try {
    if (req.method === "GET") {
      const rows = await supabaseFetch("/players?select=*&order=updated_at.desc");
      sendJson(res, 200, rows.map(toClientPlayer));
      return;
    }

    if (req.method === "POST") {
      const body = parseBody(req);
      const dbPlayer = toDbPlayer(body);

      if (body.id) {
        const rows = await supabaseFetch(`/players?id=eq.${encodeURIComponent(body.id)}&select=*`, {
          method: "PATCH",
          headers: { Prefer: "return=representation" },
          body: JSON.stringify(dbPlayer),
        });
        sendJson(res, 200, toClientPlayer(rows[0]));
        return;
      }

      const rows = await supabaseFetch("/players?select=*", {
        method: "POST",
        headers: { Prefer: "return=representation" },
        body: JSON.stringify(dbPlayer),
      });
      sendJson(res, 201, toClientPlayer(rows[0]));
      return;
    }

    sendJson(res, 405, { error: "Method not allowed" });
  } catch (error) {
    sendJson(res, error.status || 500, { error: error.message || "Server error" });
  }
};
