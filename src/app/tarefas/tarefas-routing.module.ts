import { Routes } from "@angular/router";
import { ListarTarefasComponent } from "./listar/listar-tarefas/listar-tarefas.component";
import { CadastrarTarefasComponent } from "./cadastrar/cadastrar-tarefas/cadastrar-tarefas.component";
import { EditarTarefaComponent } from "./editar/editar-tarefa/editar-tarefa.component";
import { CriarUsuarioComponent } from "../criar.usuario/criar.usuario.component"; // Importa o componente CriarUsuarioComponent para a rota

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas', // Rota principal para as funcionalidades relacionadas às tarefas
    redirectTo: 'tarefas/listar' // Redireciona para a rota de listagem de tarefas por padrão
  },
  {
    path: 'tarefas/listar', // Rota para listar as tarefas
    component: ListarTarefasComponent // Usa o componente ListarTarefasComponent para esta rota
  },
  {
    path: 'tarefas/cadastrar', // Rota para cadastrar uma nova tarefa
    component: CadastrarTarefasComponent // Usa o componente CadastrarTarefasComponent para esta rota
  },
  {
    path: 'tarefas/editar/:id', // Rota para editar uma tarefa específica, espera um parâmetro de ID na URL
    component: EditarTarefaComponent // Usa o componente EditarTarefaComponent para esta rota
  },
  {
    path: 'criar-usuario', // Rota para criar um novo usuário
    component: CriarUsuarioComponent // Usa o componente CriarUsuarioComponent para esta rota
  },
];
