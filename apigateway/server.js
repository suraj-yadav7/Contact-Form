import express from "express"
import dotenv from 'dotenv'
import colors from 'colors'
import httpProxy from 'http-proxy'
import morgan from "morgan"

const app = express()
dotenv.config()
const port = process.env.PORT
const node_server_url=process.env.NODE_SERVER_URL
const client_URL=process.env.CLIENT_URL
app.use(morgan('dev'))

// Proxy server
const proxy= httpProxy.createProxyServer({
    target:node_server_url,
    changeOrigin:true
});

// Handle CORS option
app.use((req, res,next)=>{
    res.header('Access-Control-Allow-Origin', client_URL),
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'),
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next()
})

// helper function for pathRewrite
const setupProxy=(app, path, targetUrl)=>{
    app.use(path, (req, res)=>{
        if(req.originalUrl !== path) {
            return res.status(500).send("need correct path")
        }
        req.url=targetUrl
        proxy.web(req, res, {}, (err)=>{
            console.error("Proxy error: ", err)
            res.status(500).send("Proxy-Error")
        })
    })
};

proxy.on('error', (err, req, res) => {
    console.error("Proxy Error:", err);
    res.status(500).send("Proxy Error");
});

// Setup of all proxies urls
setupProxy(app, "/api/login", "/admin/login")
setupProxy(app, "/api/signup", "/admin/signup")
setupProxy(app, "/api/form-create", "/form/create")
setupProxy(app, "/api/form-getAll", "/form/getAll")
setupProxy(app, "/api/form-delete", "/form/delete")

app.listen(port||3001, ()=>{
    console.log(`API_Gateway is Running at: ${port}`.bgWhite.blue)
});

app.get('/', (req, res)=>{
    res.send("<h1>This is API GATEWAY Server</h1>")
})


