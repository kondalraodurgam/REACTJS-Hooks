import React, { useMemo } from 'react';
// import { filterTodos } from './utils.js';

export default function TodoList({ todos, theme, tab }) {
  // console.log(tab, todos);
  const visibleTodos = useMemo(() => {
    console.log(
      '[ARTIFICIALLY SLOW] Filtering ' +
        todos.length +
        ' todos for "' +
        tab +
        '" tab.'
    );
    return todos.filter((todo) => {
      if (tab === 'all') {
        return true;
      } else if (tab === 'active') {
        return !todo.completed;
      } else if (tab === 'completed') {
        return todo.completed;
      }
    });
  }, [todos, tab]);
  return (
    <div className={theme}>
      <p>
        <b>
          Note: <code>filterTodos</code> is artificially slowed down!
        </b>
      </p>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
