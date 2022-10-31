import * as C from './styled';
import { TodoType } from '../../types/types';

type Props = {
    data: TodoType;
    onClicked: (type: string, id: string) => void;
}

export const ListItem = ({ data, onClicked }: Props) => {
    const doneOrDel = (type: string, id: string) => {
        onClicked(type, id);
    }

    return (
        <C.Container done={data.done}>
            <input type="checkbox" checked={data.done} onChange={() => doneOrDel('SWITCH_DONE', data.id)} />
            <label>{data.name}</label>
            <div onClick={() => doneOrDel('DEL_TODO', data.id)}>❌</div>
        </C.Container>
    );
}