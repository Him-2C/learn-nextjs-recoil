import React from 'react';
import {useRecoilState} from 'recoil';
import {todoListState} from '../store/todoListState';

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const addItem = () => {
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
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => addItem()}>Add</button>
    </div>
  );
};

export default TodoItemCreator;
