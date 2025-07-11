import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [title, setTitle] = useState('')
  const[color, setColor] = useState('')
  const handleClick=()=>{
    //异步 不是同步
    //react 性能优化，合并多次更新 统一更新处理
    //重绘重排
    //数据绑定，界面更新
    //JS 引擎 v8，告诉  渲染引擎Blink
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setTitle('')
    // setColor('')
    //useState 函数式更新语法
    //保证每个更新都基于上一个最新的更新
    //界面的更新合并为一次的，
    setCount(pre=>pre+1)
    setCount(pre=>pre+1)
    setCount(pre=>pre+1)
  }
  return (
    <>
      <p>当前计数:{count}</p>
      <button onClick={handleClick}>+3</button>
    </>
  )
}

export default App
