import React from 'react';

const TodoForm = ({ newTodo, onNewTodoChange, onAddTodo }) => (
    <div>
        <input
            type="text"
            value={newTodo}
            onChange={(e) => onNewTodoChange(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    onAddTodo();
                }
            }}
            placeholder="Add a new task"
        />
        <button onClick={onAddTodo}>Add task</button>
    </div>
);

export default TodoForm;
