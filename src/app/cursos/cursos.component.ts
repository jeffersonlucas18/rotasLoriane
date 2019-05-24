
import {Component, OnDestroy, OnInit} from '@angular/core';
import {CursosService} from './cursos.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

    cursos: any [];
    pagina: number;
    inscricao: Subscription;


  constructor(private cursosService: CursosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.obterCurso();
    this.obterPagina();
  }
  obterCurso() {
    this.cursos = this.cursosService.getCursos();
  }
  obterPagina() {
      this.inscricao = this.route.queryParams.subscribe((querparams: any) => {
      this.pagina = querparams['pagina'];
    });
  }
  ngOnDestroy() {
  this.inscricao.unsubscribe();
  }
  proximaPagina() {
  // this.pagina ++;
  this.router.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}});
  }
}
