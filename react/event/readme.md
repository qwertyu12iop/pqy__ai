# react 事件机制
- js 事件机制
   - 异步
   - 监听一个事件
     - addEventListener 绑定事件
     DOM2 事件
     - DOM 0 事件
     <a onclick="doSomething()"></a>
     - DOM 1? DOM 版本 没有去做事件升级

    - addEventListener(type,listener,useCapture)
    callback 回调函数 是异步处理的称呼
    - promise then
    - async await
    监听器
    - 注册事件 addEventListener
    - useCapture 默认值是false
      页面是由浏览器渲染引擎按像素点画出来 png
      先捕获 document -> 一层层去问
          先触发父元素
      找到event.target 
          捕获阶段结束，拿到event.target
      冒泡
        event.target 冒泡到html 回去到根
        事件让他在冒泡阶段执行
        在哪个阶段执行 
      


- react 事件机制