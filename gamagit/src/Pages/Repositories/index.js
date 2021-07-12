import React from 'react';
import * as S from './styled';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Repositories(){

    const [repositorios, setRepositorios] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        let nomeRepositorios = localStorage.getItem('nomeRepositorios');
        if(nomeRepositorios === null){
            history.push(`./`)
        }else{
            nomeRepositorios = JSON.parse(nomeRepositorios);
            setRepositorios(nomeRepositorios);
            localStorage.clear();
        }
    },[]);

  

    return(
        <S.Container>
            <S.Title>Repositorios</S.Title>
            <S.List>
                {repositorios.map(repositorio =>{
                    return(
                    <S.ListItens>{repositorio}</S.ListItens>
                )})}
            </S.List>
            <S.LinkHome to = '/'>Voltar</S.LinkHome>
        </S.Container>  
    )
}

