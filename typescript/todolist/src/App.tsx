import './App.css'
import HelloComponent from './components/HelloComponent.tsx'
// react+tyscript
//javascript 可能会有一些问题，主要是因为弱类型
//jsx 后缀改成tsx
//函数进行类型约束
// const HelloComponent=()=>{
//   //void 空 ReactNode
//   return 1
// }
function App() {
  //编译阶段
  //多写了些类型申明文件
  //多写了一些代码 类型申明 为代码质量保驾护航
  let count:number=10;
  const title:string='hello ts'
  const isDone:boolean=true;
  const list:number[]=[1,2,3];
  //元祖类型
  const tuple:[string,number]=['hello',10];
  //枚举类型
  enum Status{
    Pending,
    Fulfilled,
    Rejected
  }
  const pStatus:Status=Status.Pending;
  //对象的约束？
  //接口类 interface
  interface User{
    name:string;
    age:number;
    isSinger?:boolean;
  }
  //使用接口来约定类型
  const user:User={
    name:'zhangsan',
    age:18
  }
  return (
    <>
     {count}
     {title}
     {user.name}   {user.age}
     {/* typeScript很严格 */}
      <HelloComponent name="pp" />
    </>
  )
}

export default App
