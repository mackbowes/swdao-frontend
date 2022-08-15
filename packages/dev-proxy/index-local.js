const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const path = require("path");

const app = express();

const bondsProxy = createProxyMiddleware({
  target: "http://localhost:3002",
  changeOrigin: true,
});
const apiProxy = createProxyMiddleware({
  target: "http://localhost:3090",
  changeOrigin: true,
});
const uiProxy = createProxyMiddleware({
  target: "http://localhost:3001",
  changeOrigin: true,
});

app.use("/bonds", bondsProxy);
app.use("/api", apiProxy);
app.use("/", uiProxy);
app.listen(3030);
