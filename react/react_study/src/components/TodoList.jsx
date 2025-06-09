import { useState } from 'react'
import TodoForm from './TodoForm'
import Todos from './Todos';

function TodoList() {
    const [hi, setHi] = useState('haha');
    const [title, setTitle] = useState('Todo List');
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: '吃饭',
            completed: false
        }
    ]);

    const handleAdd = (text) => {
        setTodos([
            ...todos, {
                id: todos.length + 1,
                text,
                completed: false
            }
        ])
    }

    return (
        <div className='container'>
            <h1 className='title'>{title}{hi}</h1>
            <TodoForm onAdd={handleAdd} />
            <Todos todos={todos} />
        </div>
    )
}

export default TodoList;