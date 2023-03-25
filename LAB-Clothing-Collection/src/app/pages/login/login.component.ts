import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin!: FormGroup;
  
  usuario:  IUsuario[] = [];

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
    
  }

  // listarUsuario(email: IUsuario){
  //   this.usuarioService.getUsuario(email.email).subscribe(data =>{
  //     this.usuario = data;
  //   })
  // }

  onSubmit(){   
    // this.usuarioService.getUsuario()
    // .subscribe()


    if (!this.formLogin.valid){
      alert('Email ou Senha inválidos!')
      return;
    }
     const usuarioForm: IUsuario = this.formLogin.value;
     
     this.usuarioService.getUsuarioLogin(usuarioForm);
     this.router.navigate(['/dashboard']);
     
    //  this.usuarioService.login(this.usuario)

    //  if(this.formLogin.value.password === this.usuario){
    //   console.log('true');

    //  }
    //  console.log('false')


    
    
  }

}


