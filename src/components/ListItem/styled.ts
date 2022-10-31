import styled from 'styled-components';

type ContainerType = {
    done: boolean;
}

export const Container = styled.div<ContainerType>`
    display: flex;
    align-items: center;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;    

    label {
        color: #ccc;
        text-decoration: ${p => p.done ? 'line-through' : 'none'};
        flex: 1;
    }

    input {
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    div {
        font-size: 25px;
        cursor: pointer;
    }
`;