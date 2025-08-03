import {
    useTodosStore
} from '../../store/todos'
const TodoList = () => {
    const {
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
    } = useTodosStore()
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>删除</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList