import React from 'react';

const TodoFilters = ({ onEvenSelectedToggle, onOddSelectedToggle }) => (
    <div>
        <button onClick={onEvenSelectedToggle}>Highlight evens</button>
        <button onClick={onOddSelectedToggle}>Highlight odds</button>
    </div>
);

export default TodoFilters;
