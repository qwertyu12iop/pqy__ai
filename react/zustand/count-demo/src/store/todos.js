//todoList store
//全局状态模块化
import {
    create
} from 'zustand'
export const useTodosStore = create((set) => ({
    todos: [
        {
            id: 1,
            text: '学习',
            completed: false,
        },
        {
            id: 2,
            text: '吃饭',
            completed: false,
        }
    ],
    addTodo: (text) => set((state) => ({
        todos: [
            ...state.todos,
            {
                id: state.todos.length + 1,
                text,
                completed: false,
            }
        ]
    })),
    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map(
            (todo) => (todo.id === id ?{ ...todo, completed: !todo.completed } : todo))
    })),
    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
    }))

}))