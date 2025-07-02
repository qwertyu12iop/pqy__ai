import { useState } from 'react'
import PictureCard from './components/PictureCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    //JSX react 优势 方便写html模板
    <div className='container'>
      {/* 自定义组件 又叫子组件
      组件 html,css,js 沙子一样，组合起来 图片上传功能
      组合在一起 模块化了 可以复用
      页面由 dom -》组件树 */}
      <PictureCard />
    </div>
  )
}

export default App
