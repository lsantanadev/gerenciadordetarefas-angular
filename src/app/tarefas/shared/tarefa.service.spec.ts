import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importe HttpClientTestingModule para fornecer HttpClient
import { TarefaService } from './tarefa.service';

describe('TarefaService', () => {
  let service: TarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Importa HttpClientTestingModule para fornecer HttpClient
      providers: [TarefaService] // Fornecer o serviço TarefaService
    });
    service = TestBed.inject(TarefaService); // Injeta o serviço TarefaService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
