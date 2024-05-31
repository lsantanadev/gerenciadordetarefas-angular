import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importe HttpClientTestingModule para fornecer HttpClient
import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule para fornecer HttpClient
      providers: [UsuarioService] // Fornecer o serviço UsuarioService
    });
    service = TestBed.inject(UsuarioService); // Injeta o serviço UsuarioService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
