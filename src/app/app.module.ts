import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';


import {SharedModule} from './shared/shared.module';
import {AlunosModule} from './alunos/alunos.module';
import {AuthService} from './login/auth.service';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AlunosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
