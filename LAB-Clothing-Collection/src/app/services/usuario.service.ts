import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient, private router: Router) { }

  getUsuarios(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.baseUrl)
  }

  getUsuario(usuario: IUsuario):Observable<any> {
    return this.http.get<IUsuario>(`${this.baseUrl}?email=${usuario.email}`);
  }

  postUsuario(usuario: IUsuario) {
    return this.http.post<IUsuario>(this.baseUrl, usuario)
  }

  getUsuarioLogin(usuario: IUsuario){

    const usuariosDb = `${this.baseUrl}?email=${usuario!.email}`;
    const users = this.http.get<IUsuario[]>(usuariosDb);
    users.subscribe(data => {

      if(usuario.email === data[0].email && usuario.password === data[0].password){
        sessionStorage.setItem('logado', 'true');
        this.router.navigate(['/dashboard']);
        console.log('funcionou');
      }else {
        sessionStorage.setItem('logado', 'false');
        console.log('Não funcionou!');
        alert('Email ou senha inválidos!');
      }
      // console.log(usuario);
      // console.log(data);
    })
  }
}
