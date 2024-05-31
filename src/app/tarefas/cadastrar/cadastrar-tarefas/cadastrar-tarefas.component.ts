import { Component, ViewChild } from '@angular/core';
import { Tarefa } from '../../shared/tarefa.model'; // Importa o modelo de tarefa
import { TarefaService } from '../../shared/tarefa.service'; // Importa o serviço de tarefa
import { Router } from '@angular/router'; // Importa o Router do Angular
import { NgForm } from '@angular/forms'; // Importa NgForm para manipular formulários no template

@Component({
  selector: 'app-cadastrar-tarefas',
  templateUrl: './cadastrar-tarefas.component.html',
  styleUrls: ['./cadastrar-tarefas.component.css']
})
export class CadastrarTarefasComponent {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm; // Obtém uma referência ao formulário usando ViewChild

  tarefa: Tarefa; // Objeto que representa a tarefa a ser cadastrada

  constructor(
    private tarefaService: TarefaService, // Injeta o serviço de tarefa
    private router: Router // Injeta o Router
  ) { }

  ngOnInit() {
    this.tarefa = new Tarefa("", ""); // Inicializa a tarefa com valores padrão
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) { // Verifica se o formulário é válido
      this.tarefaService.cadastrar(this.tarefa).subscribe({ // Chama o método de cadastro do serviço de tarefa
        next: () => { // Em caso de sucesso
          this.router.navigate(["/tarefas/listar"]); // Redireciona para a página de listagem de tarefas após o cadastro
        },
        error: error => { // Em caso de erro
          // Trate o erro, se necessário
        }
      });
    }
  }
}
