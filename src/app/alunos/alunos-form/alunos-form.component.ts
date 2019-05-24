import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AlunosService} from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit, OnDestroy {

    aluno: any = {};
    inscricao: Subscription;

  constructor(private route: ActivatedRoute,
              private alunosService: AlunosService) { }

  ngOnInit() {
    this.obterIdAluno();
  }
  obterIdAluno() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      this.aluno = this.alunosService.obterAlunos(id);
      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
