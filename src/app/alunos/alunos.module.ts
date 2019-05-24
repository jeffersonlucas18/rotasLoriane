import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlunosComponent} from '../alunos/alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import {AlunosRouting} from './alunos.routing';
import { AlunosDetalheComponent } from './alunos-detalhe/alunos-detalhe.component';
import {AlunosService} from './alunos.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [AlunosComponent, AlunosFormComponent, AlunosDetalheComponent],
  imports: [
    CommonModule, AlunosRouting, FormsModule
  ],
  exports: [AlunosComponent],
  providers: [AlunosService]
})
export class AlunosModule { }
