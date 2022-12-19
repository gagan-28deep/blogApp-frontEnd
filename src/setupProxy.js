const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // server ke home page ka link
      target: "https://blogapp-backend-production-b278.up.railway.app/",
      // target : "http://localhost:4000",
      changeOrigin: true,
    })
  );
};
