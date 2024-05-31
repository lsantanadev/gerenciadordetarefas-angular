import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // Defina a URL da sua API
  private apiUrl = 'https://localhost:7291/api/users';

  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: UsuarioModel): Observable<any> {
    // Enviar o usuário para o backend usando a URL da API
    return this.http.post(`${this.apiUrl}/CriarUsuario`, usuario);
  }
}
