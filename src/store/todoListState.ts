import {atom} from 'recoil';

export class TodoDTO {
  id: number;
  text: string;
  isComplete: boolean;
}

export const todoListState = atom<TodoDTO[]>({
  key: 'todoListState',
  default: [],
});
