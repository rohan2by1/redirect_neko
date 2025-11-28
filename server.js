import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/", 
  createProxyMiddleware({
    target: "https://neko.rohan2by1.dev",
    changeOrigin: true,
    ws: true,         // if Neko uses WebSockets
    secure: false
  })
);

const port = process.env.PORT || 10000;
app.listen(port, () => console.log("Proxy running on port " + port));
