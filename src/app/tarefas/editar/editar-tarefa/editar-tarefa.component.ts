import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importa NgForm para manipular formulários no template
import { TarefaService } from '../../shared/tarefa.service'; // Importa o serviço de tarefa
import { ActivatedRoute, Router } from '@angular/router'; // Importa ActivatedRoute e Router do Angular para trabalhar com rotas
import { Tarefa } from '../../shared/tarefa.model'; // Importa o modelo de tarefa

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm; // Obtém uma referência ao formulário usando ViewChild
  tarefa: Tarefa; // Objeto que representa a tarefa a ser editada
  id: number; // Variável para armazenar o ID da tarefa

  constructor(
    private tarefaService: TarefaService, // Injeta o serviço de tarefa
    private route: ActivatedRoute, // Injeta ActivatedRoute para obter informações da rota atual
    private router: Router // Injeta Router para navegar entre as rotas
  ) {}

  ngOnInit() {
    this.tarefa = new Tarefa(); // Inicializa a tarefa
    let id = +this.route.snapshot.params['id']; // Obtém o ID da tarefa da URL
    this.tarefaService.buscarPorId(id).subscribe({ // Chama o serviço para buscar a tarefa pelo ID
      next: (tarefa: Tarefa) => {
        this.tarefa = tarefa; // Preenche a tarefa com os dados obtidos
      },
      error: (error: any) => {   
      }
    });
  }

  atualizar(tarefa: Tarefa): void {
    if (this.formTarefa.form.valid && tarefa) { // Verifica se o formulário é válido e se a tarefa está definida
      this.tarefaService.atualizar(tarefa.Id, tarefa).subscribe({ // Chama o serviço para atualizar a tarefa
        next: () => {
          this.router.navigate(['tarefas/listar']); // Redireciona para a lista de tarefas após a atualização
        },
        error: (error: any) => {         
        }
      }); // Atualiza a tarefa e se inscreve para receber a resposta
    }
  }
}
