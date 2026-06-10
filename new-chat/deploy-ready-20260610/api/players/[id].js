const { handleOptions, sendJson, supabaseFetch } = require("../_supabase");

module.exports = async function handler(req, res) {
  if (handleOptions(req, res)) return;

  try {
    if (req.method !== "DELETE") {
      sendJson(res, 405, { error: "Method not allowed" });
      return;
    }

    const id = req.query.id;
    await supabaseFetch(`/players?id=eq.${encodeURIComponent(id)}`, {
      method: "DELETE",
    });
    sendJson(res, 200, { ok: true });
  } catch (error) {
    sendJson(res, error.status || 500, { error: error.message || "Server error" });
  }
};
