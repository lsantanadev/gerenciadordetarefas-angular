import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarefasComponent } from './listar-tarefas.component';

describe('ListarTarefasComponent', () => {
  let component: ListarTarefasComponent; // Declaração da variável para armazenar a instância do componente
  let fixture: ComponentFixture<ListarTarefasComponent>; // Declaração da variável para armazenar o fixture do componente

  beforeEach(async () => {
    // Configuração do TestBed para configurar um módulo de teste
    await TestBed.configureTestingModule({
      declarations: [ ListarTarefasComponent ] // Declara o componente ListarTarefasComponent para este módulo de teste
    })
    .compileComponents(); // Compila os componentes declarados no TestBed

    // Cria uma instância do componente ListarTarefasComponent
    fixture = TestBed.createComponent(ListarTarefasComponent);
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
