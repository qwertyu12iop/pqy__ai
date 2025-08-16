# 进阶跨域方案 cors

- 日常用的最多的跨域解决方案
    浏览器会发送**CORS**请求，如果服务器端的响应头设置了Access-Control-Allow-Origin，后端实现了CORS
    *
    白名单

    - 简单跨域请求
        GET/POST 简单设置下Access-Control-Allow-Origin 就好
        Content-Type:  text/plain multipart/form-data application/x-www-form-urlencoded


    - 复杂跨域请求
        其他方法  安全升级
        - 预检测
           200
           Access-Control-Allow-Methods:GET,POST,PUT,DELETE,PATCH,OPTIONS
           Access-Control-Allow-Headers:Content-Type
           ...
           Method:OPTIONS
        - 真正的请求