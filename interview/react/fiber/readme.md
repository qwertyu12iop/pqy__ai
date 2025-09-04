# React Fiber 机制

- 组件比较多，组件树(树状组件)的深度比较深
    每个组件都需要经历 JSX模板的编译、VDOM 的创建、响应式的声明、生命周期、挂载等

    怎么办？核心问题是什么
    react组件渲染是同步代码，更加重要的没机会做
    打断一下，让浏览器响应用户更优先的先做一下，到时候再回来接着执行

- fiber机制是react16引入的重写核心算法，实现了可中断渲染，增量渲染，优先级调度等功能

   - 学习过一个什么api 类似fiber
         可打断可持续
         requestAnimationFrame
         requestIdleCallback

- requestAnimationFrame
是浏览器提供的用于在下一次重绘之前执行动画代码的API，它能确保动画流畅运行并节省资源。

- requestIdleCallback
  是浏览器提供的用于在主线程空闲时执行低优先级任务的API，有助于优化性能和响应性。
  - React 组件渲染低优先级任务
      不能往死里干，需要被中断
  - 更高优先级的任务是用户交互事件

  - react 组件树 渲染任务拆分
      在一个时间切片里能执行
    这个时间长度用requestIdleCallback的参数deadline来表示
      一直去问还有多少可执行时间

## 总结一下
- react组件多，组件树深度，渲染耗时，复杂
- 使用requestIdleCallback 中断渲染
- 优先响应界面交互和核心任务
- 当再次idle后，继续执行渲染任务
- requestIdleCallback 时间不定， 16.67ms（刷帧）-优先任务的耗时 = 本次执行时间
- 没有fiber react组件一多就会卡，fiber解决性能问题，主要通过中断渲染，保障用户交互流畅，解决大型应用阻塞主线程问题
- fiber 节点，react渲染的工作单位