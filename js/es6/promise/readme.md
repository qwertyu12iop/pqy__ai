# promise

- CPU轮询
- 同步任务，异步任务
  异步任务：先跳到事件队列，等同步任务执行完，再执行事件队列中的任务  
  代码的编写顺序和执行顺序不一定相同
  异步任务比较花时间
- 有个需求
  111 输出放在后面
  控制执行的顺序

## Promise 的底层理解
画个饼
- 异步任务需要些时间，不管的话，跳到后面执行
  代码的可读性不好，代码的阅读顺序和执行顺序不一致
- const p = new Promise(fn)
  类，专门用于解决异步问题
  prototype then 方法
- 异步任务放到fn
- fn 里面的异步任务做完了，调用resolve()
- p.then() 里面的代码会被放到事件队列中，等待同步任务执行完，再执行事件队列中的任务
- 我们把任务放到then 里面 就可以把执行的流程交给resolve来处理


## **控制执行流程**的es6 套路
  - new Promise(fn)  //请Promise类 控制异步流程专业
  - (resolve) =>{   //executor  耗时性的异步任务
     异步任务 setTimeout readFile fetch...
  }
  - .then() 原型方法
  - resolve() then 函数执行

- promise .then 升级到 async await 
  async 用于修饰函数，函数里面有异步任务
  await 等待异步任务完成，异步变同步