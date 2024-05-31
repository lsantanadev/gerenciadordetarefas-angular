import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; // Importe MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Importe MatButtonModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Importe MatFormFieldModule

import { CriarUsuarioComponent } from './criar.usuario.component';

@NgModule({
  declarations: [
    CriarUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, // Adicione MatInputModule
    MatButtonModule, // Adicione MatButtonModule
    MatFormFieldModule // Adicione MatFormFieldModule
  ],
  exports: [
    CriarUsuarioComponent
  ]
})
export class CriarUsuarioModule { }
