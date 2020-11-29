import React from 'react';
import {useRecoilState} from 'recoil';
import {StateTodoType, todoListFilterState} from '../store/todoListFilterState';

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <>
      Filter:
      <select value={filter} onChange={(e) => setFilter(e.target.value as StateTodoType)}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
};

export default TodoListFilters;
