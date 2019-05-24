import { RotaNotFoundComponent } from '../cursos/rota-not-found/rota-not-found.component';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CursosComponent} from '../cursos/cursos.component';
import {CursoDetalheComponent} from '../cursos/curso-detalhe/curso-detalhe.component';

const cursosRoutes: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: CursoDetalheComponent},
  {path: 'naoencontrado', component: RotaNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRouting { }
