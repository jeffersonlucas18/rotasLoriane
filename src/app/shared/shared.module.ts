import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CursoDetalheComponent} from '../cursos/curso-detalhe/curso-detalhe.component';
import {CursosComponent} from '../cursos/cursos.component';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {RotaNotFoundComponent} from '../cursos/rota-not-found/rota-not-found.component';

import {CursosService} from '../cursos/cursos.service';
import {CursosRouting} from '../cursos/cursos.routing';
import {AuthService} from '../login/auth.service';





@NgModule({
  declarations: [ LoginComponent, CursosComponent, CursoDetalheComponent, HomeComponent, RotaNotFoundComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    CursosRouting,
    FormsModule
  ],
  exports: [LoginComponent, CursosComponent, CursoDetalheComponent, HomeComponent, RotaNotFoundComponent],
  providers: [CursosService, AuthService]
})
export class SharedModule { }
