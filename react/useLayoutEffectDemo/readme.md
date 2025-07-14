# useLayoutEffect

- useEffect 副作用
  - 当渲染完成之后
  - 当依赖项改变之后
  - 当组件卸载之前

- useLayoutEffect 副作用
  dom更新之后  阻塞页面的渲染
  - 在页面渲染之前
  
- 能够解决什么问题
  防“闪烁” 用户体验
  类似“同步”拿到响应式之后的元素的样式

  useRef 响应式对象