import {selector} from 'recoil';
import {todoListFilterState} from './todoListFilterState';
import {todoListState} from './todoListState';

export const todoListFilteredState = selector({
  key: 'todoListFilteredState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
