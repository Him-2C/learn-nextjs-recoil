import React from 'react';
import {useRecoilState} from 'recoil';
import {TodoDTO, todoListState} from '../store/todoListState';

type Props = {
  item: TodoDTO;
};

function replaceItemAtIndex<ItemT>(arr: ItemT[], index: number, newValue: ItemT) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

function removeItemAtIndex<ItemT>(arr: ItemT[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const TodoItem = (props: Props) => {
  const {item} = props;
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (value: string) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input
        type="text"
        value={item.text}
        onChange={(e) => editItemText(e.target.value)}
      />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={() => deleteItem()}>X</button>
    </div>
  );
};

export default TodoItem;
