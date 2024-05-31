import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  let http: HttpClient; // HttpClient usado para fazer solicitações HTTP
  let httpMock: HttpTestingController; // Controlador para mockar solicitações HTTP

  beforeEach(() => {
    // Configuração do módulo de teste
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule para simular solicitações HTTP
      providers: [
        {
          provide: HTTP_INTERCEPTORS, // Fornece HTTP_INTERCEPTORS
          useClass: TokenInterceptor, // Usa o TokenInterceptor como interceptor
          multi: true // Permite a injeção de vários interceptadores
        }
      ]
    });

    // Injeta HttpClient e HttpTestingController
    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Testa se o TokenInterceptor adiciona corretamente o cabeçalho de Autorização com o token do localStorage
  it('should add an Authorization header with Bearer token from localStorage', () => {
    const token = 'test_token';
    localStorage.setItem('token', token); // Define um token no localStorage para simulação

    http.get('/test').subscribe(); // Faz uma solicitação HTTP usando HttpClient

    const req = httpMock.expectOne('/test'); // Obtém a solicitação mockada correspondente
    expect(req.request.headers.has('Authorization')).toBeTruthy(); // Verifica se o cabeçalho de Autorização foi adicionado
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${token}`); // Verifica se o valor do token está correto

    req.flush({}); // Completa a solicitação mockada
  });

  // Testa se o TokenInterceptor não adiciona o cabeçalho de Autorização se o token não estiver presente no localStorage
  it('should not add an Authorization header if token is not present in localStorage', () => {
    localStorage.removeItem('token'); // Remove o token do localStorage

    http.get('/test').subscribe(); // Faz uma solicitação HTTP usando HttpClient

    const req = httpMock.expectOne('/test'); // Obtém a solicitação mockada correspondente
    expect(req.request.headers.has('Authorization')).toBeFalsy(); // Verifica se o cabeçalho de Autorização não foi adicionado

    req.flush({}); // Completa a solicitação mockada
  });

  afterEach(() => {
    httpMock.verify(); // Verifica se todas as solicitações mockadas foram atendidas
  });
});
