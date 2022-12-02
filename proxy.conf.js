const PROXY_CONFIG = [
  {
    context: ["/"],
    target: "http://localhost:7777",
    bypass: (req) => (req.headers.accept.includes("html") ? "/" : null),
    secure: false,
    changeOrigin: true,
    logLevel: "info"
  }
]

module.exports = PROXY_CONFIG;