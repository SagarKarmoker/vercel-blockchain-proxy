const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config()

const app = express();

// Target HTTP server URL
const target = process.env.TARGET_URL;

app.use('/', createProxyMiddleware({
    target: target,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('X-Forwarded-Proto', 'https');
    }
}));

app.listen(3000, () => {
    console.log('Proxy server is running on port 3000');
});

module.exports = app;
