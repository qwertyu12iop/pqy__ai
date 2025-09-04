// src/app/todo/page.tsx
'use client'; // 这里要加 'use client'！因为要管理 Todo 列表的状态（useState）

import { useState } from 'react';
import TodoInput from '../components/TodoInput';
import { Todo } from '../types/todo';

export default function TodoPage() {
    // 初始化 Todo 列表（可后续替换成 await fetch 获取的真实数据）
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: '1',
            title: '学习 Next.js App Router',
            completed: false,
            createdAt: new Date().toISOString(),
        },
        {
            id: '2',
            title: '开发 Todo 项目',
            completed: false,
            createdAt: new Date().toISOString(),
        },
    ]);

    // 添加 Todo 的逻辑
    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: Date.now().toString(), // 用时间戳当唯一ID
            title,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTodos([...todos, newTodo]); // 新增 Todo 到列表
    };

    // 切换 Todo 完成状态
    const toggleTodo = (id: string) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
                我的 Todo 清单 📝
            </h1>

            {/* 集成 TodoInput 组件，传入添加 Todo 的回调 */}
            <TodoInput onAddTodo={addTodo} />

            {/* 展示 Todo 列表 */}
            {todos.length === 0 ? (
                <div className="text-center text-gray-500">
                    还没有 Todo，快添加一个吧～
                </div>
            ) : (
                <ul className="space-y-3">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`flex items-center justify-between p-4 border rounded-md ${todo.completed ? 'bg-gray-50 line-through text-gray-500' : 'bg-white'
                                } hover:shadow-md transition-shadow`}
                        >
                            <div className="flex items-center gap-3">
                                {/* 复选框：切换完成状态 */}
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                    className="w-5 h-5 accent-blue-500"
                                />
                                {/* Todo 内容 */}
                                <span>{todo.title}</span>
                            </div>
                            {/* 创建时间（格式化显示） */}
                            <span className="text-xs text-gray-400">
                                {new Date(todo.createdAt).toLocaleString()}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}