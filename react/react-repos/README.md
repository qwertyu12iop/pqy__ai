# react repos 项目开发
- api.github.io/users/shunwuyu/repos
- 综合react开发全家桶、项目级别、大型的、性能

## 路由设计
- react-router-dom
- /user/:username/repos(/repos/:username)
- /repos/:id
懒加载  （路由守卫）
hash / history  二选一
useParams  拿到username
## 数据管理
      App 数据管理
      repos
      useContext+useReducer+hooks
      涉及到 createContext+reducer+useRepos
## react
      组件的粒度
## api 怎么打理
  fetch
  - axios  http请求库
  - 独立的模块，所有请求会从组件中分离到api目录下
  - Axios 是一个基于 Promise 的 HTTP 客户端，用于浏览器和 Node.js 中进行 AJAX 请求，支持拦截请求和响应、取消请求、转换数据等特性。

## 项目目录结构，项目架构
  - api
     应用中所有的接口
  - main.jsx
     入口文件
     添加路由，SPA
     添加全局


- RepoList 功能模块
     - params 解析
         - useParams 动态参数对象
         - 不要放到useEffect里面
         - 对他进行校验 trim()
              不要相信用户的任何提交
         - navigate('/') 路由跳转  ->  放到useEffect中
- 组件开发模式
     - UI 组件(JSX)
     - 自定义hooks useRepos 方便
     - 状态管理  应用全局 context 来管
         - repos loading error => context value
         - useReducer reducer 函数 
     - 
     - 
  

