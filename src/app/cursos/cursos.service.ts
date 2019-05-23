import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome:'angular 2', }
      {id: 2, nome:'Java', }
    ];
  }
}
