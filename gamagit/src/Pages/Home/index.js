//importaçoes de pacotes ou arquivos que serao utilizados
import React,{ useState } from 'react';
import axios from 'axios';//o pacote axios permite a interçao com  Api
import * as S from './styled'// arquivo de estilos que cria os elementos ja estilizados
import { useHistory } from 'react-router-dom';// permite realizar a transicao entre as paginas do projeto react

function App(props) {
  const history = useHistory();
  const [usuario , setUsuario] = useState();//desconstrucáo padrao de um estado definido (useState)
  const [erro , setErro] = useState(false);

  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response=>{
      const repositorios = response.data;
      const nomeRepositorios = [];
      repositorios.map(repositorios => {
        nomeRepositorios.push(repositorios.name);
      })
      localStorage.setItem('nomeRepositorios', JSON.stringify(nomeRepositorios));
      setErro(false);
      history.push('/repositories');
    })
    .catch(erro =>{
      setErro(true);
    });
  }

  return (
    <S.Container>
    <S.Content>
      <S.Input className = 'usuarioInput' placeholder = 'Usuário' value = {usuario} onChange={e=> setUsuario(e.target.value)}/>
      <S.Button onClick = {handlePesquisa}>Pesquisar</S.Button>
    </S.Content>
    { erro ? <S.MsgErro>Ocorreu um Erro!Tente Novamente.</S.MsgErro> : ''}
    </S.Container>
  );
}

export default App;
