const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Target HTTP server URL
const target = 'http://129.154.245.79:8545';

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
