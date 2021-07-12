import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    text-align: center;
    font-family: sans-serif;
    font-size: 2rem;
    color: #333;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
    font-family: sans-serif;
`;

export const ListItens = styled.li`
    margin: .5rem;
    background: #000;
    color: #fff;
    padding: .5rem;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 50%;
    margin: 2rem auto;
    padding: .5rem auto;
    color: white;
    background-color: #000;
    text-align: center;
    text-decoration: none;
`;
