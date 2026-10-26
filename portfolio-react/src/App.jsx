import Cabecalho from "./Cabecalho.jsx";
import CardProjeto from "./CardProjeto.jsx";
import Rodape from "./Rodape.jsx";

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <h2>Projetos</h2>
        <div className="cards">
          <CardProjeto
            nome="Portfolio Angular"
            descricao="Meu portfolio com Angular e Angular Material."
            tecnologias="Angular, TypeScript"
            link_github="https://github.com/Marcosvvf-ifpr/DWII-portfolioAngular"
            ano={2026}
          />
          <CardProjeto
            titulo="API do Portfolio em PHP"
            descricao="Endpoints de projetos e catalogo com PDO e MariaDB"
            link_github={null}
            ano={2026}
          />
          <CardProjeto
            nome="Sistema de Cadastro v1"
            descricao="CRUD em PHP do 1° trimestre."
            tecnologias="PHP, MariaDB, BOOtstrap"
            link_github={null}
            ano={2026}
          />
        </div>
      </main>
      <Rodape />
    </>
  );
}

export default App;