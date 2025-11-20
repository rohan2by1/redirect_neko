// server.js
import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

// Proxy all requests to your backend
app.use("/", createProxyMiddleware({
  target: "http://57.159.29.115:8080",
  changeOrigin: true,
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
