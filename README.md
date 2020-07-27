# Desafio-Front-End-Fluig

Esse projeto foi implementado para medição de conhecimentos iniciais sobre as tecnologias Angular 10, Bootstrap 4 e API REST para consumo do end-point FLUIG TASKS.

## Começando

Necessário seguir instruções para execução do projeto.

### Clonar projeto - GitHub

Necessário baixar o projeto do `GitHub`.

```shell
git clone https://github.com/GVBP/Desafio-Front-End-Fluig.git
```

### Node-Modules - Dependências

Necessário baixar as dependências `node-modules` do projeto.

```shell
npm install
```

### Json-Server - Back-End Fake

Necessário executar o `json-server` para simular o back-end fake.

```shell
json-server --watch db.json
```

**Obs.:** O projeto ainda não possue integração com o end-point FLUIG TASKS, por conta de erros de CORS. Para contornar esse problema do lado cliente servidor, a implementação, será aplicada em um servidor back-end com node.js.

### Angular 10 - Client Server

```shell
ng serve
```

Aplicação disponível em `http://localhost:4200`.