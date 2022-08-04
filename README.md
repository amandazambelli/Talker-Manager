# Talker Manager #

Projeto desenvolvido no módulo de Back-End do curso de desenvolvimento Web da Trybe.
A aplicação é uma API de um CRUD de palestrantes onde é possível cadastrar, visualizar, pesquisar, editar e excluir informações sobre os talkers.


## Rotas ##

- Endpoint GET /talker: retorna as informações das pessoas palestrantes cadastradas.

- Endpoint GET /talker/:id: retorna uma pessoa palestrante com base no id da rota.

- Endpoint POST /login: recebe no corpo da requisição os campos email e password e retorna um token aleatório de 16 caracteres.
Este token será utilizado pelas requisições das próximas rotas.

- Endpoint POST /talker: adiciona uma nova pessoa palestrante ao arquivo de talkers cadastrados.

- Endpoint PUT /talker/:id: edita uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

- Endpoint DELETE /talker/:id: deleta uma pessoa palestrande cadastrada.

- Endpoint GET /talker/search: retorna os palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL.
