import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarUsuarioComponent } from './criar.usuario.component';
import { ReactiveFormsModule } from '@angular/forms'; // Importe o módulo ReactiveFormsModule, caso esteja sendo usado

describe('CriarUsuarioComponent', () => {
  let component: CriarUsuarioComponent;
  let fixture: ComponentFixture<CriarUsuarioComponent>;

  beforeEach(async () => {
    // Configuração do módulo de teste
    await TestBed.configureTestingModule({
      declarations: [CriarUsuarioComponent], // Adicione o componente ao array de declarações
      imports: [ReactiveFormsModule] // Adicione o módulo ReactiveFormsModule, caso esteja sendo usado
    })
    .compileComponents(); // Compila os componentes declarados no TestBed
    
    // Cria uma instância do componente CriarUsuarioComponent para o teste
    fixture = TestBed.createComponent(CriarUsuarioComponent);
    component = fixture.componentInstance;
    // Detecta as mudanças
    fixture.detectChanges();
  });

  // Testa se o componente CriarUsuarioComponent foi criado com sucesso
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
