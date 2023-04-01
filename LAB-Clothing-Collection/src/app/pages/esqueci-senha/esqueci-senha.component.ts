import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss']
})
export class EsqueciSenhaComponent {
  email: string = "";
  formAlterarSenha!: FormGroup;

  constructor(private fb: FormBuilder){
    this.formAlterarSenha = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  alterarSenha(){
    if(!this.formAlterarSenha.valid){
      alert('E-mail inválido!');
      return;
    }

    const email = this.formAlterarSenha.controls['email'].value;
    this.email = email;
  }

}
