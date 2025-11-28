const express = require("express");
const httpProxy = require("http-proxy");

const app = express();

const TARGET = process.env.TARGET_URL; 
// Example: "http://4.188.80.161:8080"

const proxy = httpProxy.createProxyServer({
  target: TARGET,
  ws: true,
  changeOrigin: true,
  secure: false
});

// HTTP Proxy
app.use((req, res) => {
  proxy.web(req, res);
});

// WebSocket Proxy
app.on("upgrade", (req, socket, head) => {
  proxy.ws(req, socket, head);
});

const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log("Reverse proxy running on port", port);
});
