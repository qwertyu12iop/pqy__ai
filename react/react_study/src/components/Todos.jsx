function Todos(props) {
    console.log(props, '/////');
    const todos = props.todos;
    return (
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))
            }
        </ul>
    )
}

export default Todos;