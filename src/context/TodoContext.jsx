// 1. Import
import React, { useState, createContext } from "react";

// 2. Create Context
export const TodoContext = createContext({
  todos: [],
  handleSaveNewTodo: () => {},
  handleUpdateTodo: () => {},
  handleDeleteTodo: () => {},
  handleStatusUpdate: () => {},
});

// 3. Create Provider
export default function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  // Add new todo
  function handleSaveNewTodo(todo = {}) {
    const todosCopy = [...todos];
    todosCopy.push({ ...todo, id: new Date().getTime() });
    setTodos(todosCopy);
  }

  // Update a todo
  function handleUpdateTodo(data = {}) {
    let todosCopy = [...todos].filter((todo) => todo.id !== data.id);
    todosCopy.push(data);
    setTodos(todosCopy);
  }

  // Delete a todo
  function handleDeleteTodo(id = {}) {
    let todosCopy = [...todos].filter((todo) => todo.id !== id);
    setTodos(todosCopy);
  }

  function handleStatusUpdate(id = 0, status = false) {
    const todosCopy = [...todos];
    const matchingTodo = todosCopy.find((todo) => todo.id === id);
    matchingTodo.status = status ? "completed" : "not-completed";
    setTodos(todosCopy);
  }

  // Context value
  const value = {
    todos,
    handleSaveNewTodo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleStatusUpdate,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

TodoContextProvider.propTypes = {
  children: React.Component,
};
