const { sendJson, supabaseFetch } = require("./_supabase");

module.exports = async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      sendJson(res, 405, { error: "Method not allowed" });
      return;
    }

    await supabaseFetch("/players?select=id&limit=1");
    sendJson(res, 200, {
      ok: true,
      message: "Vercel and Supabase are connected.",
    });
  } catch (error) {
    sendJson(res, error.status || 500, {
      ok: false,
      error: error.message || "Connection failed.",
    });
  }
};
