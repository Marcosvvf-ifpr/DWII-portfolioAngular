import { useEffect, useState } from 'react';
import API from './api.jsx'
import Cabecalho from "./Cabecalho.jsx";
import CardProjeto from "./CardProjeto.jsx";
import Contato from './Contato.jsx';
import Rodape from "./Rodape.jsx";


function App() {
  const [projetos, setProjetos] = useState([]);
  const [carregado, setCarregado] = useState(true);
  const [erro, setErro] = useState('');

  async function buscarProjetos() {
    try{
      const resposta = await fetch(API + '/api/projetos');
      if (!resposta.ok) {
        throw new Error('a API respondeu ' + resposta.status)
      }
      const dados = await resposta.json();
      setProjetos(dados);
    } catch(falha) {
      setErro('Não deu para carregar os projetos: ' + falha.message);
    }
    setCarregado(false);
  }


  useEffect(() => {
    buscarProjetos();
  }, []);

  return (
    <>
      <Cabecalho />
      <main>
        <h2>Projetos</h2>
        {carregado && <p>Carregando projetos...</p>}
        {erro && <p className="erro">{erro}</p>}
        <div className="cards">
          {projetos.map((p) => (
            <CardProjeto
              key={p.id}
              nome={p.nome}
              descricao={p.descricao}
              tecnologias={p.tecnologias}
              link_github={p.link_github}
              ano={p.ano}
            />
          ))}
        </div>
        <Contato />
      </main>
      <Rodape />
    </>
  );
}

export default App;