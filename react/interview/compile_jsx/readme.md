- JSX
    - JSX 不能独立运行
    - vite 工程化
         jsx ->React.createElement
    - React 环境中

- babel 
     Make javascript great again.
     大胆使用JS 最新语法  不用等待
     es6 promise -> es8 async await
     babel  将let -> var
     ()=>{}  -> function(){}

 1.js -o 2.js

- 编译的流程
    - pnpm i @babel/cli @babel/core -D   
      @babel/cli babel的命令行工具
      @babel/core babel的核心库，提供了转换的API
      babel 负责js转码
      -D开发环境依赖  dev 上线之后是不需要的
    - ./node_modules/.bin/babel
      转换的规则
      react -> IOS代码
      es6 -> es5
      JSX -> React.createElement()

    - 创建配置文件 .babelrc
    - pnpm i @babel/preset-env  本地依赖安装
    - pnpm i -D @babel/preset-react 

