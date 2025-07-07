import { useState } from 'react'
import Todos from './components/Todos'
import './App.css'

function App() {

  return (
    <>
      {/* 开发的任务单位就是组件 */}
      {/* <div style={{ fontSize: '12px', width: '8.3333em', height: '8.3333em', background: 'green' }}></div>
      <div style={{ fontSize: '14px', width: '3.5714em', height: '3.5714em', background: 'green' }}></div> */}

      <Todos/>

    </>
  )
}

export default App
