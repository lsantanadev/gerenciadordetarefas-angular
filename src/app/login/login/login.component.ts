import { Component } from '@angular/core';
import { LoginService } from '../services/login.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = ''; // Variável para armazenar o e-mail do usuário
  password: string = ''; // Variável para armazenar a senha do usuário

  constructor(private loginService: LoginService, private router: Router) { } // Injeta o serviço de login e o Router

  login() {
    this.loginService.loginUsuario(this.email, this.password).subscribe( // Chama o método de login do serviço
      (response: any) => { // Em caso de sucesso
        // Lógica de sucesso
        localStorage.setItem('Token', response.Token); // Armazena o token de autenticação no localStorage
        // Redirecionar ou atualizar a página após o login
        this.router.navigate(['/tarefas/listar']); // Redireciona para a página de listagem de tarefas após o login
      },
      (error) => { // Em caso de erro
        // Lógica de erro
        console.error('Erro ao fazer login:', error); // Exibe o erro no console
      }
    );
  }
}
