import { useState } from 'react'

import './App.css'
//react 不能直接操作DOM,性能差 高速 v8 ->渲染引擎
//react 借鉴了DOM 0 行内写法
//相似 学习成本 react event 并不是原生事件，叫合成事件
//onClick 不是onclick 不是字符串，而是事件函数绑定
const handleClick=(e)=>{
  //事件模块是项目，框架的核心部分，react 性能，封装，优化
  console.log(e);//合成事件SyntheticEvent 
  console.log(e.nativeEvent);//原生事件
  //事件代理 绑定在挂载点上 #root+唯一值 
  console.log('立即访问',e.type);
  setTimeout(()=>{
    console.log('延迟访问',e.type);//事件源
  },1000)
  
}
function App() {

  return (
    <>
     <button onClick={handleClick}>click</button>
    </>
  )
}

export default App
