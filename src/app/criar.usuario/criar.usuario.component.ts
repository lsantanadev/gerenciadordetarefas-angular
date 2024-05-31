import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2/src/sweetalert2'; 
import { UsuarioService } from './usuario.service'; 
import { Router } from '@angular/router';
import { UsuarioModel } from '../criar.usuario/usuario.model'; 

@Component({
  selector: 'app-criar.usuario',
  templateUrl: './criar.usuario.component.html',
  styleUrls: ['./criar.usuario.component.css']
})
export class CriarUsuarioComponent implements OnInit {
  cadastroForm: FormGroup; // Formulário de cadastro
  helpers: any; // Objeto para funções de ajuda
  msg: any; // Mensagens 

  constructor(private fb: FormBuilder, private userService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    // Inicialização do formulário com validações
    this.cadastroForm = this.fb.group({
      role: ['', [Validators.required]], // Papel do usuário
      fullName: ['', [Validators.required]], // Nome completo
      email: ['', [Validators.required, Validators.email]], // E-mail
      password: ['', [Validators.required]] // Senha
    });

    // Definição de funções de ajuda para validação de formulário
    this.helpers = {
      isInvalid: (form: FormGroup, field: string, error: string) => {
        return form.get(field)?.hasError(error) && form.get(field)?.touched;
      }
    };
  }

  // Alternar papel de usuário entre gerente e funcionário
  toggleRole(role: 'gerente' | 'funcionario') {
    this.cadastroForm.get('role')?.setValue(role);
  }

  // Função para cadastrar usuário
  cadastrarUsuario() {
    if (this.cadastroForm.valid) { // Verifica se o formulário é válido
      const payload: UsuarioModel = this.cadastroForm.value; // Obtém os dados do formulário
      this.userService.cadastrarUsuario(payload).subscribe( // Chama o serviço para cadastrar o usuário
        (response) => { // Em caso de sucesso
          Swal.fire({ // Mostra um alerta de sucesso
            title: 'Bem-vindo!',
            text: 'Cadastro realizado com sucesso!',
            icon: 'success',
            confirmButtonText: 'Ok!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('login'); // Redireciona para a página de login
            }
          });
        },
        (error) => { // Em caso de erro
          console.error('Erro ao criar usuário:', error);
          Swal.fire({ // Mostra um alerta de erro
            title: 'Ops!',
            text: 'Falha ao criar usuário. Verifique suas informações e tente novamente.',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      );
    } else { // Se o formulário não for válido
      this.cadastroForm.markAllAsTouched(); // Marca todos os campos como tocados para exibir mensagens de erro
    }
  }
}
