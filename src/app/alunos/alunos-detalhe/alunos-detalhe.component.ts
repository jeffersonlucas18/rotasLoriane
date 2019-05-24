import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {AlunosService} from '../alunos.service';

@Component({
  selector: 'app-alunos-detalhe',
  templateUrl: './alunos-detalhe.component.html',
  styleUrls: ['./alunos-detalhe.component.css']
})
export class AlunosDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute,
              private alunoService: AlunosService) { }

  ngOnInit() {
  this.obterIdAluno();
  }
  obterIdAluno() {
  this.inscricao = this.route.params.subscribe((params: any) => {
    let id = params['id'];
    this.aluno = this.alunoService.obterAlunos(id);
  });

  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
  editarContato() {
    console.log('dsds');
  }
}
