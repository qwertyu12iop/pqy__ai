//启动http server
//引入express 框架
//import express from 'express'
//node 最初的common js的模块化方案
const express=require('express')
// console.log(express);
const app=express();//后端应用 APP
//路由
app.get('/',(req,res)=>{
    //返回index.html
    //res.send("hello")//str
    //response 有请求req 用户，浏览量(proxy) url localhost:1315+get+path/
    //http 足够简单 高并发 用户赶快走 断开联系
    //__dirname 项目的根目录
    res.sendFile(__dirname+'/index.html')
})
//添加一个支持server push的路由
app.get('/sse',(req,res)=>{
    //支持server push 服务器端推送 少量的
    //设置响应头
    res.set({
        //stream 文本流   事件
        'Content-Type':'text/event-stream',
        'Cache-Control':'no-cache',//禁止前端使用缓存
        'Connection':'keep-alive',//保持连接
    })
    res.flushHeaders();
    setInterval(()=>{
        const message=`Current Time is ${new Date().toLocaleDateString()}`
 //server push   
        res.write(`data:${message}\n\n`)
    },1000)
})
//node 内置模块
const http=require('http').Server(app)//server 基本能力 B/S架构
//如何理解监听？伺服状态 把用户作为主子
http.listen(1315,()=>{
    console.log('server is running on 1315');
    
})