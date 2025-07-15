# event loop
事件循环机制 js的执行机制

- js 单线程
  同一时刻只能做一件事
  同步任务优先执行  要尽快执行 渲染页面(重绘重排)  响应用户的交互
  耗时性的任务
  - setTimeout/setInterval
  - fetch/ajax
  - eventListener

- script 脚本
  一个宏任务

- 微任务有哪些？
  紧急的，优先的，同步任务执行完后的一个补充
  - promise.then()
  - MutationObserver 关注节点的变化
    dom 改变 在页面渲染前 拿到DOM有啥改变
  - queueMictoask() 批量更新DOM
    dom 树，cssom，layout树 图层合并


## 多进程和多线程
- CPU 轮循
  
- 进程
  分配资源的最小单元
    内存（地址，物理） CPU计算的机会
    独立的进程ID 一定的大小，开销
    程序运行以进程为单位
    - 主进程
      管理子进程 父子关系 并发
      进程间的通信
    - 主线程
      执行js代码
- 线程（干活的）

- 进程间的通信
  两个独立的进程间的通信开销很大
  父子进程就好点

- 浏览器是多进程架构 (chrome)
  - 浏览器主进程
    多线程
  - 一个tab 就是一个渲染进程
    多进程
    几个tab 几个进程
    安全、一个页面crash了，别的不受影响
  - 主线程 主角
    js 单线程
    - 简单
    - DOM 编程模型 不能产生线程的争抢

- setTimeout 浏览器有专属的定时器线程
  到时间了将回调函数(callback)放入宏任务队列
  将其放到event loop  队列中
  进入event loop机制
  宏任务， 微任务 队列
  - addEventListener 没有独立的线程
    跟DOM有关 不需要  宏任务队列里面
  - fetch/xhr 专属的下载线程

- 渲染进程的主线程
  - 解析HTML -> 生成DOM树
  - 解析CSS -> 生成CSSOM树
  - DOM树和CSSOM树 -> 渲染树
  - layout树
  - 合并图层
  - v8引擎 js执行
  - 独立的绘制线程

- 事件队列？
  - 定时器到点了
  - onreadystatechange  4
  - 微任务队列
  - 宏任务队列

- 页面渲染

JS 和 渲染是互斥的