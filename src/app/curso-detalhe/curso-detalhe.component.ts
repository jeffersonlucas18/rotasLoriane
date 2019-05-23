import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscribable, Subscription} from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

    id: string;
    inscricao: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.idByteste();
  }
  idByteste() {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
    })
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
