import { useReducer } from 'react';
import { v4 } from 'uuid';
import { readLocalStorage } from '../localStorage/storage';
import { ReducerActionType, TodoType } from '../types/types';

export const todoInitialState: TodoType[] = []

export const todoReducer = (state: TodoType[], action: ReducerActionType) => {
    switch(action.type) {
        case 'ADD_TODO':
            if(action.payload.name) {
                const cloneState: TodoType[] = [...state];
                cloneState.push({
                    id: v4(),
                    name: action.payload.name,
                    done: false
                });
                return cloneState;
            }
        break;
        case 'SWITCH_DONE':
            if(action.payload.id) {
                const cloneState: TodoType[] = [...state];                           
                const index: number = cloneState.findIndex(item => item.id === action.payload.id);                

                if(index !== -1) {  
                    const done = cloneState[index].done ? false : true;                                     
                    cloneState[index].done = done;
                } 

                return cloneState;
            }
        break;
        case 'DEL_TODO':
            if(action.payload.id) {
                let cloneState: TodoType[] = [...state];                
                
                cloneState = cloneState.filter(item => item.id !== action.payload.id);

                return cloneState;
            }
        break;
    }

    return state;
}

export const useTodo = () => {
    return useReducer(
        todoReducer,
        todoInitialState,
        readLocalStorage
    );
}