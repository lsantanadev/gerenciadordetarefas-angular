import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTarefasComponent } from './cadastrar-tarefas.component';

describe('CadastrarTarefasComponent', () => {
  let component: CadastrarTarefasComponent; // Declaração da variável para armazenar a instância do componente
  let fixture: ComponentFixture<CadastrarTarefasComponent>; // Declaração da variável para armazenar o fixture do componente

  beforeEach(async () => {
    // Configuração do TestBed para configurar um módulo de teste
    await TestBed.configureTestingModule({
      declarations: [ CadastrarTarefasComponent ] // Declara o componente CadastrarTarefasComponent para este módulo de teste
    })
    .compileComponents(); // Compila os componentes declarados no TestBed

    // Cria uma instância do componente CadastrarTarefasComponent
    fixture = TestBed.createComponent(CadastrarTarefasComponent);
    // Atribui a instância do componente à variável 'component'
    component = fixture.componentInstance;
    // Detecta mudanças e renderiza o componente
    fixture.detectChanges();
  });

  // Testa se o componente foi criado com sucesso
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
