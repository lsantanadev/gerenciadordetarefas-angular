import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    // Configuração do módulo de teste
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule // Importa RouterTestingModule para simular o roteamento
      ],
      declarations: [
        AppComponent // Declara o componente AppComponent para este módulo de teste
      ],
    }).compileComponents(); // Compila os componentes declarados no TestBed
  });

  // Testa se o componente AppComponent foi criado com sucesso
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Testa se o título do aplicativo é 'gerenciador-tarefas'
  it(`should have as title 'gerenciador-tarefas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('gerenciador-tarefas');
  });

  // Testa se o título do aplicativo está sendo renderizado corretamente no HTML
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Detecta mudanças e renderiza o componente
    const compiled = fixture.nativeElement as HTMLElement;
    // Verifica se o título do aplicativo está presente no HTML
    expect(compiled.querySelector('.content span')?.textContent).toContain('gerenciador-tarefas app is running!');
  });
});
