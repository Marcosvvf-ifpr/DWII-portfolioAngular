### Aula 27: os projetos vem da API

O front busca os projetos e o catalogo na API em Node, com `fetch` dentro de um `useEffect`.
O endereco da API fica em `src/api.js`. O arquivo `src/projetos.js` saiu: os dados moram no banco.

Para a tela mostrar os dados, a API precisa estar de pe, com a porta 3000 em Public:

    sudo service mariadb start
    cd api-node
    node server.js