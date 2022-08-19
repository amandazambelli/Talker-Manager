# Talker Manager #

Projeto desenvolvido no módulo de Back-End do curso de desenvolvimento Web da Trybe.
A aplicação é uma API de um CRUD de palestrantes onde é possível cadastrar, visualizar, pesquisar, editar e excluir informações sobre os talkers.


## Rotas ##

GET | http://localhost:3000/talker - retorna as informações das pessoas palestrantes cadastradas.

GET | http://localhost:3000/talker/:id: - retorna uma pessoa palestrante com base no id da rota.

GET | http://localhost:3000/search?q=name - retorna os palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL.

POST | http://localhost:3000/login - recebe no corpo da requisição os campos email e password e retorna um token aleatório de 16 caracteres.
Este token será utilizado pelas requisições das próximas rotas.

PUT | http://localhost:3000/talker/:id: - edita uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

DELETE | http://localhost:3000/talker/:id - deleta uma pessoa palestrande cadastrada.
