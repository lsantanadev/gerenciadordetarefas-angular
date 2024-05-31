import { TestBed } from '@angular/core/testing';
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  let interceptor: HttpInterceptor; // Declaração da variável para armazenar o interceptor

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TokenInterceptor, // Fornece o TokenInterceptor
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor, // Usa o TokenInterceptor como interceptor HTTP
          multi: true // Permite a injeção de vários interceptors
        }
      ]
    });

    interceptor = TestBed.inject(TokenInterceptor); // Obtém a instância do TokenInterceptor injetado
  });

  // Teste para verificar se o interceptor foi criado com sucesso
  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });

  // Teste para verificar se o cabeçalho de Autorização com token é adicionado à solicitação
  it('should add an Authorization header with token to the request', () => {
    const token = 'testToken'; // Token de teste
    const request = new HttpRequest('GET', '/api/data'); // Cria uma solicitação HTTP de teste

    // Intercepta a solicitação e verifica se o cabeçalho de Autorização foi adicionado corretamente
    const modifiedRequest = interceptor.intercept(request, {
      handle: (req: HttpRequest<any>) => {
        expect(req.headers.has('Authorization')).toBe(true); // Verifica se o cabeçalho de Autorização está presente
        expect(req.headers.get('Authorization')).toBe(`Bearer ${token}`); // Verifica se o valor do cabeçalho de Autorização é correto
        return undefined as any; // Retorna undefined para simular o tratamento da solicitação
      }
    });

    expect(modifiedRequest).toBeUndefined(); // Verifica se a solicitação modificada é undefined
  });

  // Teste para verificar se o cabeçalho de Autorização não é adicionado se o token não estiver presente
  it('should not add an Authorization header if token is not present', () => {
    const request = new HttpRequest('GET', '/api/data'); // Cria uma solicitação HTTP de teste sem token

    // Intercepta a solicitação e verifica se o cabeçalho de Autorização não foi adicionado
    const modifiedRequest = interceptor.intercept(request, {
      handle: (req: HttpRequest<any>) => {
        expect(req.headers.has('Authorization')).toBe(false); // Verifica se o cabeçalho de Autorização não está presente
        return undefined as any; // Retorna undefined para simular o tratamento da solicitação
      }
    });

    expect(modifiedRequest).toBeUndefined(); // Verifica se a solicitação modificada é undefined
  });

});
