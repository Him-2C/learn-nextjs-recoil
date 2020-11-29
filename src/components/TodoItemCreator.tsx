import React from 'react';
import {useRecoilState} from 'recoil';
import {todoListState} from '../store/todoListState';

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: todoList.length,
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <form onSubmit={(e) => addItem(e)}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" onClick={(e) => addItem(e)}>Add</button>
    </form>
  );
};

export default TodoItemCreator;
