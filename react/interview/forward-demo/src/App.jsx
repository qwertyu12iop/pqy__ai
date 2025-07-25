import { useState } from 'react'
import {
  useRef,
  useEffect,
  forwardRef
} from 'react'
import './App.css'

function Guang(pros,ref){
  console.log(pros,ref);
  return (
    <div>
      <input type='text' ref={ref}/>
    </div>
  )
}
//将函数组件作为一个参数传递给forwardRef函数  得到一个新的组件
// 这个新的组件可以传递ref
const WrapperGuang=forwardRef(Guang)
//高阶组件

function App() {
  //父组件 想持有ref
  const ref=useRef(null)
  console.log(ref.current);
  useEffect(()=>{
    ref.current?.focus()//可选链运算符
  },[])
  return (
    <div className='App'>
      {/* <input ref={ref} /> */}
      {/* 函数组件不能直接传递ref对象 */}
      {/* <Guang ref={ref}/> */}
      <WrapperGuang ref={ref}/>
    </div>
  )
}

export default App
