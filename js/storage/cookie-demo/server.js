//node 后端
//启动http http是node内置的核心
// js在命令行运行
//js有两种模块化方案 
//require node的早期模块化 commonJS
//import es6更先进的模块化方案
//old module 
//node 受欢迎 适合于中小规模的项目开发
//端口 -> 某个服务
//3306 mysql 数据库端口 服务对应一个进程（资源）  线程（执行）
//Domain(localhost) -> ip地址 域名(127.0.0.1) ->某台设备 ->port 设备上的某个服务(进程)
//一台设备上可以有很多个端口使用 有多个http服务 多个网站
//不要使用一些特殊端口
const http = require('http');
const fs=require('fs');//file system 文件系统
const path=require('path');//path 路径模块
const server = http.createServer((req, res) => {
    //res.end('hello http server')
    //http基于请求响应的协议
    //路由 Method + url 定位了服务器端的资源
    //为了资源 
    if(req.method=='GET'&&(req.url=='/'||req.url=='/index.html')){
        //res.end('hello http server')
        // console.log(__dirname);
        // console.log(path.join(__dirname, 'public', 'index.html'));
        
        fs.readFile(path.join(__dirname,'public','index.html'),
        //回调callback
        (err,content)=>{
            //前端体验为主
            //后端稳定为主
            if(err){
                res.writeHead(500);//5xx代表服务器错误  响应头
                res.end('server error')
                return;
            }
            //不只是html,css,js,jpg
            res.writeHead(200,{
                'Content-Type':'text/html'
            })
            res.end(content);
        })
    }
    //后端路由 暴露资源
    //http://localhost:8080/style.css?a=1&b=2
    //协议http://localhost 域名 端口 /style.css path  querystring
    if(req.method=='GET'&&req.url=='/style.css'){
        fs.readFile(path.join(__dirname,'public','style.css'),
    (err,content)=>{
        if(err){
            res.writeHead(500);//5xx代表服务器错误  响应头
            res.end('server error')
            return;
        }
        res.writeHead(200,{
            'Content-Type':'text/css'
        })
        res.end(content);
        
    })
    }
    if (req.method == 'GET' && req.url == '/script.js') {
        fs.readFile(path.join(__dirname, 'public', 'script.js'),
            (err, content) => {
                if (err) {
                    res.writeHead(500);//5xx代表服务器错误  响应头
                    res.end('server error')
                    return;
                }
                res.writeHead(200, {
                    'Content-Type': 'text/javascript'
                })
                res.end(content);

            })
    }
})
//80端口是http协议的默认端口
server.listen(8080)