import React from 'react';

const TodoItem = ({ todo, index, onComplete, onRemove, evenSelected, oddSelected }) => (
    <li
        className={`${todo.completed ? 'complete' : ''} ${
            (evenSelected && index % 2 === 1) || (oddSelected && index % 2 === 0) ? 'highlight' : ''
        }`}>
        {todo.text}
        <div className="task-btns">
            <button onClick={() => onRemove(index)}>Delete</button>
            <button onClick={() => onComplete(index)}>Complete</button>
        </div>
    </li>
);

export default TodoItem;
