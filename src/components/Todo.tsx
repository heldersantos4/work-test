'use client';

import { useCallback, useEffect, useReducer, useState } from 'react';
import { TodoInput } from './TodoInput';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type ActionTodo = {
  type: 'add' | 'remove' | 'complete' | 'rename';
  id?: number;
  newTitle?: string;
};

const reducer = (state: Todo[], action: ActionTodo): Todo[] => {
  switch (action.type) {
    case 'add':
      return [...state, { id: state.length + 1, title: '', completed: false }];
    case 'remove':
      return state.filter((item) => item.id !== action.id);
    case 'rename':
      return state.map((todo) => {
        if (todo.id == action.id && action.newTitle) {
          return { ...todo, title: action.newTitle};
        } else {
          return todo;
        }
      });
    case 'complete':
      return state.map((todo) => {
          if (todo.id == action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[] | []>([
    { id: 1, title: '05 Pães', completed: true },
    { id: 2, title: '1 cx de Leite Tirol', completed: false },
    { id: 3, title: '30 und de Ovos', completed: false },
  ]);

  const [todos, dispatch] = useReducer(reducer, todoList);

  const handleAdd = useCallback(() => {
    dispatch({ type: 'add' });
  }, [todos]);

  const handleRename = (id:number, newTitle:string) => dispatch({ type: 'rename', newTitle, id });
  const handleComplete = (todo: Todo) => dispatch({ type: 'complete', id: todo.id });
  
  const handleDelete = (todo: Todo) => dispatch({ type: 'remove', id: todo.id });

  const updateTodos = useCallback(() => {
    setTodoList(todos);
  }, [todos]);

  useEffect(() => {
    updateTodos()
  }, [todos]);

  return (
    <>
      <button
        onClick={handleAdd}
        className='px-3 py-1 bg-zinc-700 mt-3 rounded-md'
      >+ Novo</button>
      <ul className='flex flex-col gap-1.5 my-3 transition-all'>
        {todos.length > 0 &&
          todos.map((todo, key) => {
            return (
              <li
                key={`${todo.title}-${key}`}
                className='hover:bg-zinc-800 flex justify-between items-center px-1.5 py-1 rounded-md'
              >
                <TodoInput
                  value={todo.title}
                  handleAdd={handleAdd}
                  handleSave={(newTitle) => handleRename(todo.id, newTitle as string)}
                  handleDelete={() => handleDelete(todo)}
                />
                <div className='rounded-md flex gap-2 items-center'>
                  {/* <span
                    className='text-xs bg-red-500 hover:bg-red-500 rounded-md px-1.5 py-0.5'
                    onClick={() => handleDelete(todo)}
                  >
                    Apagar
                  </span> */}
                  <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => handleComplete(todo)}
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};








