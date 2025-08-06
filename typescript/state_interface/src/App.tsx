import { useState } from 'react'
import './App.css'
// 由于找不到模块，需要确认文件是否存在，若路径无误需创建对应文件
import NameEditComponent from './components/NameEditComponent.tsx';

function App() {
  //js 代码
  //const [name,setName] = useState('initialName');
  //ts 代码
  const [name,setName] = useState<string>('hello');
  const setUsernameState=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value);
  }
  return (
    <>
     <NameEditComponent  userName={name} onChange={setUsernameState}/>
    </>
  )
}

export default App
