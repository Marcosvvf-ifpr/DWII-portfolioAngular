## Aula 24: a tranca

Quem escreve precisa de um token. Antes do primeiro uso, crie a tabela e o dono:

    sudo mariadb dwii_db < sql/usuarios.sql
    cd api-node
    npm install
    node criar-usuario.js dono@portfolio.dev portfolio2026

Login e escrita com o token: 

    curl -i -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d *{"email": "dono@portfolio.dev", "senha": "portfolio2026"}"
    curl -i -X POST http://localhost:3000/api/projetos -H "Authorization: Bearer $Token" -H "Content-Type: application/json" -d "{"nome": "Projeto com tranca", "ano":2026}'
    curl -i -X PUT http://localhost:3000/api/projetos/8 -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" -d '{"nome": "Projeto com tranca (editado)", "ano":2026}'