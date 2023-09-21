import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TodoFilters from './TodoFilters';
import TodoActions from './TodoActions';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [evenSelected, setEvenSelected] = useState(false);
    const [oddSelected, setOddSelected] = useState(false);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));

        if (storedTasks && storedTasks.length > 0) {
            setTodos(storedTasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([{ text: newTodo, completed: false }, ...todos]);
            setNewTodo('');
        }
    };

    const removeFirstTodo = () => {
        setTodos(todos.slice(1));
    };

    const removeLastTodo = () => {
        setTodos(todos.slice(0, -1));
    };

    const completeTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;

        if (updatedTodos[index].completed) {
            updatedTodos.push(updatedTodos.splice(index, 1)[0]);
        } else {
            updatedTodos.unshift(updatedTodos.splice(index, 1)[0]);
        }

        setTodos(updatedTodos);
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-container">
            <h1>Todo List</h1>
            <TodoForm newTodo={newTodo} onNewTodoChange={setNewTodo} onAddTodo={addTodo} />
            <TodoFilters
                onEvenSelectedToggle={() => setEvenSelected(!evenSelected)}
                onOddSelectedToggle={() => setOddSelected(!oddSelected)}
            />
            <TodoActions onRemoveLastTodo={removeLastTodo} onRemoveFirstTodo={removeFirstTodo} />
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        index={index}
                        evenSelected={evenSelected}
                        oddSelected={oddSelected}
                        onComplete={completeTodo}
                        onRemove={removeTodo}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
