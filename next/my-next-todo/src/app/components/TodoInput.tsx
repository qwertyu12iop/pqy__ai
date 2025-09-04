'use client'; // 必须加！因为要用 useState

import { useState } from 'react';

// 接收一个添加Todo的回调函数
interface TodoInputProps {
    onAddTodo: (title: string) => void;
}

export default function TodoInput({ onAddTodo }: TodoInputProps) {
    const [title, setTitle] = useState(''); // 管理输入框内容

    // 处理表单提交
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // 阻止默认刷新
        if (!title.trim()) return; // 空内容不添加

        onAddTodo(title); // 调用父组件传的回调，添加Todo
        setTitle(''); // 清空输入框
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="输入你的Todo..."
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
                添加
            </button>
        </form>
    );
}