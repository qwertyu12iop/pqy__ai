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
