import express from "express"
import dotenv from 'dotenv'
import colors from 'colors'
import { createProxyMiddleware } from "http-proxy-middleware"
import morgan from "morgan"

const app = express()
dotenv.config()
const port = process.env.PORT
const node_server_url=process.env.NODE_SERVER_URL
app.use(morgan('dev'))


app.use("/api/login",createProxyMiddleware({
    target:node_server_url,
    changeOrigin:true,
    pathRewrite:{
        "^/api/login":"",
    },
    onProxyReq:(proxyReq, req, res)=>{
        console.log("proxeypath", proxyReq.path)
        console.log("api url: ", req.url)
    }
}));

app.use("/api", createProxyMiddleware({
    target:node_server_url,
    changeOrigin:true,
    pathRewrite:{
        "/api":''
    }
}));


app.listen(port||3001, ()=>{
    console.log(`API_Gateway is Running at: ${port}`.bgWhite.blue)
});



