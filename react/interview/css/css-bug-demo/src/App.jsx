import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import AnotherButton from './components/AnotherButton'
//import 不止会加载文件 还会运行  路由懒加载



function App() {

  return (
    <>
      <Button />
      <AnotherButton />
    </>
  )
}

export default App
