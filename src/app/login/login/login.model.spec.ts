import { LoginModel } from './login.model';

describe('LoginModel', () => {
  it('should create an instance', () => {
    // Cria uma instância de LoginModel com argumentos válidos
    const loginModel = new LoginModel('lara@.com', 'senha');

    // Verifica se a instância foi criada com sucesso
    expect(loginModel).toBeTruthy();
  });
});
