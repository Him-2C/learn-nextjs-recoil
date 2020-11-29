import {atom} from 'recoil';

export type StateTodoType = 'Show All' | 'Show Completed' | 'Show Uncompleted'

export const todoListFilterState = atom<StateTodoType>({
  key: 'todoListFilterState',
  default: 'Show All',
});
