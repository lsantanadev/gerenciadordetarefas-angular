import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importa HttpClientTestingModule para fornecer HttpClient

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule para fornecer HttpClient
      providers: [LoginService] // Fornecer o serviço LoginService
    });
    service = TestBed.inject(LoginService); // Injeta o serviço LoginService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
