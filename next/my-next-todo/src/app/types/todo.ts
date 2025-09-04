// src/types/todo.ts
export interface Todo {
    id: string; // 用字符串ID，避免数字溢出
    title: string; // Todo 内容
    completed: boolean; // 是否完成
    createdAt: string; // 创建时间
  }