import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTarefaComponent } from './editar-tarefa.component';

describe('EditarTarefaComponent', () => {
  let component: EditarTarefaComponent;
  let fixture: ComponentFixture<EditarTarefaComponent>;

  beforeEach(async () => {
    // Configuração do TestBed para configurar um módulo de teste
    await TestBed.configureTestingModule({
      declarations: [ EditarTarefaComponent ] // Declara o componente EditarTarefaComponent para este módulo de teste
    })
    .compileComponents(); // Compila os componentes declarados no TestBed

    // Cria uma instância do componente EditarTarefaComponent
    fixture = TestBed.createComponent(EditarTarefaComponent);
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
