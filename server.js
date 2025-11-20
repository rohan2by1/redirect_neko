import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use("/", createProxyMiddleware({
  target: "http://57.159.29.115:8080",
  changeOrigin: true,
  ws: true // Enable WebSocket proxying
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy with WebSocket support running on port ${port}`);
});
