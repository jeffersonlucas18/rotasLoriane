import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    {id: 1 , nome: 'Davi', email: 'alunos@gmail.com' },
    {id: 2 , nome: 'Davi Vittas', email: 'Vittas@gmail.com' },
    {id: 3 , nome: 'Piruleibe', email: 'addedlunos@gmail.com'}
  ];

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  obterAlunos(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

}
