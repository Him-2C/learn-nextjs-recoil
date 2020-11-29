import React from 'react';
import {useRecoilValue} from 'recoil';
import {todoListFilteredState} from '../store/todoListFilteredState';

import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

const TodoList = () => {
  const todoList = useRecoilValue(todoListFilteredState);

  return (
    <React.Fragment>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </React.Fragment>
  );
};

export default TodoList;
