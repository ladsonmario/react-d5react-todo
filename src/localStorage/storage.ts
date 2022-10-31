import { TodoType } from '../types/types';

export const readLocalStorage = (initialValue: TodoType[]) => JSON.parse(localStorage.getItem('saved') as string) || initialValue;

export const writeLocalStorage = (item: TodoType[]) => {
    window.localStorage.setItem('saved', JSON.stringify(item));
}

