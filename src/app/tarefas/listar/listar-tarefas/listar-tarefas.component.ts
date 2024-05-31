import { Tarefa } from '../../shared/tarefa.model'; // Importa o modelo de Tarefa
import { TarefaService } from './../../shared/tarefa.service'; // Importa o serviço de Tarefa
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[]; // Array para armazenar as tarefas
  tituloFiltro: string = ''; // String para armazenar o título do filtro

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.carregarTarefas(); // Chama a função para carregar as tarefas ao inicializar o componente
  }

  // Função para listar todas as tarefas
  carregarTarefas() {
    this.tarefaService.getTarefas().subscribe(tarefas => {
      this.tarefas = tarefas; // Atribui as tarefas obtidas do serviço ao array tarefas
      console.log(this.tarefas); // Exibe as tarefas no console para depuração
    });
  }

  // Função para filtrar as tarefas por título
  filtrarPorTitulo(): void {
    if (this.tituloFiltro.trim() === '') { // Verifica se o título do filtro está vazio
      this.carregarTarefas(); // Se estiver vazio, carrega todas as tarefas novamente
    } else {
      this.tarefaService.filtrarPorTitulo(this.tituloFiltro).subscribe(tarefas => {
        this.tarefas = tarefas; // Filtra as tarefas pelo título fornecido
      });
    }
  }

  // Função para remover uma tarefa
  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault(); // Previne o comportamento padrão do evento (por exemplo, seguir um link)
    // Confirmação do usuário para remoção da tarefa
    if (confirm('Deseja remover a tarefa "' + tarefa.Titulo + '"?')) {
      // Chamada ao serviço para remover a tarefa pelo ID
      this.tarefaService.remover(tarefa.Id).subscribe({
        next: () => { // Callback para manipular a resposta de sucesso
          this.carregarTarefas(); // Atualiza a lista de tarefas após a remoção
        },
        error: (error: any) => { // Callback para lidar com erros
          console.error(error); // Loga o erro no console
        }
      });
    }
  }

  // Função para alterar o status de uma tarefa
  alterarStatus(tarefa: Tarefa): void {
    // Confirmação do usuário para alteração do status da tarefa
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.Titulo + '"?')) {
      // Chamada ao serviço para alterar o status da tarefa pelo ID
      this.tarefaService.alterarStatus(tarefa.Id).subscribe({
        next: () => { // Callback para manipular a resposta de sucesso
          this.carregarTarefas(); // Atualiza a lista de tarefas após a alteração do status
        },
        error: (error: any) => { // Callback para lidar com erros
          console.error(error); // Loga o erro no console
        }
      });
    }
  }
}
