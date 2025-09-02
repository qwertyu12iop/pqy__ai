# 工程化

- 哪些问题？工程一揽子方案
      - 启动web server 5173 端口 http模块  express老牌后端框架
          将index.html首页
      - tsx -> jsx -> babel js
      - styl -> css文件
      ...
      基础，后方工作

- 怎么介绍vite 
    - 兼容性问题
         IE 11以下
    <script type="module" src="/src/main.jsx"></script>
    VITE是一个基于原生ES模块(Webpack,浏览器很多还不支持模块化)的开发服务器
    通过按需编译实现急速冷启动(快)与热更新的新一代前端构建工具
    
    - 为什么快？
        - 基于原生ES模块，不需要打包所有文件，只要按需加载文件
        - 

    main.jsx是入口文件，模块的依赖
    main.jsx -> App.jsx -> App.css + react +component + router + api +store
    整理这些模块之间的依赖关系(链条)

- webpack
    由于要支持老旧浏览器，不使用esm，要打包
    a依赖b b依赖c c依赖d
    a -> b -> c -> d
    不使用模块化
    先编译d 编译成js 最上面
    c 编译 放到d下面
    b 放到c下面
    a 放到b下面
    一起打个包，成为一个文件

## webpack 和vite 的区别
- 在index.html里面没有type="module" 怕浏览器不支持esm
  整理依赖关系，打包文件，慢
- 适合大型项目，丰富的配置
    - entry,output 这是核心
    - plugins
        html-webpack-plugin html template 在哪
    - devServer
        http server 细节
    web bundler 一切静态资源皆可打包
    vite快，不需要打包，但是有兼容性问题，生态、定制性不如webpack
    webpack 打包，慢一点，但是兼容性好，生态丰富，可为大型项目定制，有很长时间的业务验证



