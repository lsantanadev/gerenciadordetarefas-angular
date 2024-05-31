import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaRoutes } from '../tarefas/tarefas-routing.module';
import { EditarTarefaComponent } from '../tarefas/editar/editar-tarefa/editar-tarefa.component';
import { CriarUsuarioComponent } from '../criar.usuario/criar.usuario.component';
import { LoginComponent } from '../login/login/login.component'; 

const routes: Routes = [
  {
    path: '',
    redirectTo: '/criar-usuario', // Redirecionar para a rota iniciar
    pathMatch: 'full'
  },
  { path: 'tarefas/editar/:id', component: EditarTarefaComponent },
  { path: 'criar-usuario', component: CriarUsuarioComponent },
  { path: 'login', component: LoginComponent }, // Corrigir o path para o LoginComponent
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
