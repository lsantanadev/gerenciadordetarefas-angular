# Gerenciador de Tarefas | .NET e Angular 

Esta é uma aplicação Angular que se comunica com uma API em .NET.

## Configuração

Certifique-se de ter o Node.js e o Angular CLI instalados em seu sistema.

1. Para instalar o Node.js, visite [o site oficial do Node.js](https://nodejs.org/) e siga as instruções de instalação para seu sistema operacional.

2. Após a instalação do Node.js, instale o Angular CLI globalmente usando o seguinte comando no terminal:
npm install -g @angular/cli

1. Clone este repositório:
git clone https://github.com/lsantanadev/gerenciadordetarefas-angular


2. Navegue até o diretório do projeto:
cd gerenciador_de_tarefas_angular-master

3. Instale as dependências do projeto:
npm install


4. Certifique-se de que sua API em .NET esteja em execução e acessível.

## Execução

Execute o seguinte comando no terminal para iniciar o servidor de desenvolvimento do Angular:

ng serve

Isso iniciará o servidor de desenvolvimento e você poderá acessar a aplicação em `http://localhost:4200`.

## Funcionalidades

- Cadastro, exclusão, edição, listagem de tarefas, filtro de pesquisa,
- Cadastro de usuários como gerente ou funcionário.

## Autorização

- A API .NET utiliza a anotação [Authorize(Roles = "gerente, funcionario")] para controlar o acesso às rotas. Apenas usuários autenticados com as funções "gerente" ou "funcionario" podem acessar as rotas protegidas.

- (Criar Tarefa): Requer autenticação e a função "gerente" ou "funcionario".
- (Atualizar Tarefa): Requer autenticação e a função "gerente" ou "funcionario".
- (Deletar Tarefa): Requer autenticação e a função "gerente".
- (Obter Tarefa por Título): Requer autenticação e a função "gerente" ou "funcionario".
- (Obter Tarefa por ID): Requer autenticação e a função "gerente" ou "funcionario".
- (Obter Todas as Tarefas): Requer autenticação e a função "gerente" ou "funcionario".

## Observações

- Este é meu primeiro projeto em Angular e estou tendo uma experiência ímpar. 
- Aproveitei a oportunidade para criar este projeto para um cenário na Fadba. 
Inclusive, o gerente já havia comentado sobre a importância de um sistema como esse. 
- Há muito o que melhorar ainda, e estou sempre em busca de reformulações e aprimoramentos.


- Agradeço primeiramente a Deus e à equipe do IATec pela oportunidade de realizar este projeto. Espero que gostem do resultado!