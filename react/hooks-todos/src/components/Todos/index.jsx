import{
    //响应式状态hooks
    useState,//react 函数式编程 提供的好用的以use开头的函数

}from'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
const Todos=()=>{
    //数据流管理
    //父组件持有 管理数据 props传递数据
    //子组件props 自定义函数 通知父组件
    const [todos,setTodos]=useState([{
        id:1,
        title:'打豆豆',
        isComplete:false,
    },{
        
            id: 2,
            title: '算法比赛',
            isComplete: false,
        
    }
])
//新增todo
const addTodo=()=>{
    //setTodo
}
    return(
        <div className='app'>
            
            {/* 自定义事件 */}
            <TodoForm onAddTodo={addTodo}/>
            <TodoList todos={todos}/>
        </div>
    )
}

export default Todos