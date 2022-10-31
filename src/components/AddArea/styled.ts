import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #555;
    padding: 10px;
    margin: 20px 0;
    border-radius: 10px;

    .image {
        margin-right: 5px;
        font-size: 22px;
    }

    input {
        border: 0;
        outline: 0;
        background: transparent;
        color: #fff;
        font-size: 18px;
        flex: 1;
    }
`;