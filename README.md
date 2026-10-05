## Aula 23: a API cria, altera e apaga

A API em uso e a de `api-node/`. Os arquivos `api/*.php` e `conexao.php` ficam no
repositorio como historico do 2° trimestres.

    curl -i -X POST http://localhost:3000/api/projetos -H "Content-Type: application/json" -d '{"nome":"Projeto de testes","ano":2026}'
    curl -i -X PUT http://localhost:3000/api/projetos/7 -H "Content-Type: application/json" -d '{"nome":"Projeto de teste (editado)","ano":2026}'
    curl -i -X DELETE http://local:3000/api/projetos/7