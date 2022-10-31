import { ChangeEvent, useState, KeyboardEvent } from 'react';
import * as C from './styled';

type Props = {
    onEnter: (taskName: string) => void;
}

export const AddArea = ({ onEnter }: Props) => {
    const [text, setText] = useState<string>('');

    const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.key === 'Enter' && text !== '') {
            onEnter(text);
            setText('');
        }
    }
    return (
        <C.Container>
            <div className="image">➕</div>
            <input type="text" placeholder="Adicione uma tarefa" onChange={handleTextInput} value={text} onKeyUp={handleKeyUp} />
        </C.Container>
    );
}