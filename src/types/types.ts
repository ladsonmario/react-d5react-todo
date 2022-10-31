export type TodoType = {
    id: string;
    name: string;
    done: boolean;
}

export type ReducerActionType = {
    type: string;
    payload: {
        [key: string]: any;
    }
}