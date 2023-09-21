import React from 'react';

const TodoActions = ({ onRemoveLastTodo, onRemoveFirstTodo }) => (
    <div>
        <button onClick={onRemoveLastTodo}>Delete last</button>
        <button onClick={onRemoveFirstTodo}>Delete first</button>
    </div>
);

export default TodoActions;
