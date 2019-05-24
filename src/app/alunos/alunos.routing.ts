import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlunosComponent} from './alunos.component';
import {AlunosFormComponent} from './alunos-form/alunos-form.component';
import {AlunosDetalheComponent} from './alunos-detalhe/alunos-detalhe.component';


const routes: Routes = [
  {path: 'alunos', component: AlunosComponent , children: [
      {path: 'novo', component: AlunosFormComponent},
      {path: ':id', component: AlunosDetalheComponent},
      {path: ':id/edit', component: AlunosFormComponent} ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRouting { }
