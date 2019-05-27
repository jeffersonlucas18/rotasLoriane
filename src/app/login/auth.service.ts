import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from './usuario';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado:boolean = false;

  mostrarNavbar = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(usuario: Usuario) {
    if ( usuario.nome === 'usuario@email.com' &&  usuario.senha === '123456' ) {
      this.usuarioAutenticado = true;
      this.mostrarNavbar.emit(true);
      this.router.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarNavbar.emit(false);
    }
  }

}
