import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'; // Importa classes necessárias para interceptar requisições HTTP
import { Observable } from 'rxjs'; // Importa Observable para lidar com fluxos de dados assíncronos

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('Token'); // Obtém o token de autenticação armazenado no localStorage
    if (token) { // Se um token estiver presente
      request = request.clone({ // Clona a requisição original
        setHeaders: {
          Authorization: `Bearer ${token}` // Define o cabeçalho Authorization com o token de autenticação
        }
      });
    }
    return next.handle(request); // Encaminha a requisição para o próximo manipulador na cadeia de interceptadores
  }
}
