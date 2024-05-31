import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TarefaService } from './shared/tarefa.service';
import { ListarTarefasComponent } from './listar/listar-tarefas/listar-tarefas.component';
import { CadastrarTarefasComponent } from './cadastrar/cadastrar-tarefas/cadastrar-tarefas.component';
import { EditarTarefaComponent } from './editar/editar-tarefa/editar-tarefa.component';
import { TarefaConclui3daDirective } from './shared/concluida/tarefa-concluida.directive';

// encapsula funcionalidades relacionadas a tarefas em um único lugar, facilitando a organização e a manutenção do código.

@NgModule({
  declarations: [
    ListarTarefasComponent,
    CadastrarTarefasComponent,
    EditarTarefaComponent,
    TarefaConclui3daDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
