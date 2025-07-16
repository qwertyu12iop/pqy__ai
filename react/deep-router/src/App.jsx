import { useState } from 'react'
import {
  BrowserRouter as Router,//前端路由可以二选一
  Routes,
  Route,
} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
// import Home from './pages/Home'
// import About from './pages/About'
import {
  Suspense,
  lazy
} from 'react'
import ProtectRoute from './pages/ProtectRoute'
import Pay from './pages/Pay'
//函数 路由 ->Route
//新的组件
const Home=lazy(()=>import('./pages/Home'))
const About=lazy(()=>import('./pages/About'))
const NotFound=lazy(()=>import('./pages/NotFound'))
const Login=lazy(()=>import('./pages/Login'))

function App() {

  return (
    <>
      <Router>
        <Navigation />
        <Suspense fallback={<div>加载中...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            {/* 校验权限 */}
            <Route path='/pay' element={
              <ProtectRoute>
                <Pay/>
                <div>123</div>
                <div>456</div>
              </ProtectRoute>
            }/>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
