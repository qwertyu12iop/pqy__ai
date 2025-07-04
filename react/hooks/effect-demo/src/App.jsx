import { 
  useState,
  useEffect,
} from 'react'
import './App.css'
import Timer from './components/Timer'

function App() {
  const [count,setCount]=useState(0)
  const[num,setNumber]=useState(0)
  const [repos, setRepos] = useState([])
  const [isTimeOn,setIsTimeOn]=useState(true)
  // console.log('组件函数开始执行');
  
  // // 正作用？渲染组件
  // //渲染完组件后搞点副作用
  // //生命周期函数 挂载后 mounted
  // useEffect(()=>{
  //   console.log('组件渲染完了');
  // })
  // //生命周期的更新
  // useEffect(()=>{
  //   console.log('hahah');
  // },[count]);//第二个参数是依赖项，依赖项发生变化时才会执行副作用
  // useEffect(() => {
  //   console.log('hehee');
  // }, [num]);
  // useEffect(() => {
  //   console.log('12345');
  // }, [count,num]);
  
  useEffect(()=>{
    //api 数据 动态的
    console.log('只在组件挂载时运行一次!!!!');
    const fetchRepos=async()=>{
      const response = await fetch('https://api.github.com/users/shunwuyu/repos')
      const data=await response.json()
      console.log(data);
      setRepos(data)
    }
    fetchRepos()
  },[])
  //组件的模板编译
  //挂载到#root节点上
 // console.log('组件的模板编译');
  
  return (
    <>
    {count}
    <button onClick={()=>{
      setCount(count+1)
    }}>点我</button>
      {num}
      <button onClick={() => {
        setNumber(num + 1)
      }}>点我</button>
      <ul id="repos">
        {
          repos.map(repo=>
            <li key={repo.id}>
              ${repo.full_name}
              </li>
          )
        }
      </ul>
      {isTimeOn&&<Timer />}
      <button onClick={()=>{
        setIsTimeOn(!isTimeOn)
      }}>toggle timer</button>
    </>
  )
}

export default App
