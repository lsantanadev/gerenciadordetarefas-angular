import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './login/app-routing.module';
import { AppComponent } from './app.component';
import { TarefasModule } from './tarefas/tarefas.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { LoginModule } from './login/login/login.module';
import { LoginService } from './login/services/login.service';
import { TokenInterceptor } from './login/login/token.interceptor'; 
import { CriarUsuarioModule } from './criar.usuario/criar-usuario.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 

// essencial para a configuração e inicialização da aplicação

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TarefasModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    LoginModule,
    CriarUsuarioModule,
    FormsModule,
  ],
  providers: [
    LoginService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    provideAnimationsAsync() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
