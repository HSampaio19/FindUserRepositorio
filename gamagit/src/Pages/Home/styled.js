import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 2rem;
    padding: 0 .25rem;

    &:focus
    &:active{
        outline: none;
        shadown-box: none;
    }
`;

export const Button = styled.button`
    background: #000;
    color: #fff;
    border: 1px solid #000;
    border-radius: 0 .25rem .25rem 0;
    height: 2rem;
    padding: 0 .25rem;

    &:focus
    &:active{
        outline: none;
        shadown-box: none;
    }
`;

export const MsgErro = styled.span`
    margin: 1rem 0;
    color: red;
`;