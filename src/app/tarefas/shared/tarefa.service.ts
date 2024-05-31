import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private apiUrl = 'https://localhost:7291/api/Tasks'; // URL da API

  constructor(private http: HttpClient) { }

  // métodos para interagir com a API RESTful

  // Método para obter todas as tarefas
  getTarefas(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ObterTodas`);
  }

  // Método para cadastrar uma nova tarefa
  cadastrar(tarefa: Tarefa): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/CriarTarefa`, tarefa, { headers: headers });
  }

  // Método para buscar uma tarefa por ID
  buscarPorId(id: number): Observable<any> {
    const url = `https://localhost:7291/api/Tasks/ObterPorID?id=${id}`;
    return this.http.get<any>(url);
  }

  // Método para filtrar tarefas por título
  filtrarPorTitulo(titulo: string): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(`${this.apiUrl}/ObterPorTitulo/${titulo}`);
  }

  // Método para atualizar uma tarefa existente
  atualizar(id: number, tarefa: Tarefa): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/Atualizar/${id}`, tarefa);
  }

  // Método para remover uma tarefa
  remover(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/Deletar?id=${id}`);
  }

  // Método para alterar o status de uma tarefa
  alterarStatus(id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/AlterarStatus/${id}`, {});
  }
}
