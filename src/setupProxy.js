const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // server ke home page ka link
      target: "https://node-api-vzfv.onrender.com/",
      // target : "http://localhost:4000",
      changeOrigin: true,
    })
  );
};
