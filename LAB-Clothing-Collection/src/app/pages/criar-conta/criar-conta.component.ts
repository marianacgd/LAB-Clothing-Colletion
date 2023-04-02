import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.component.html',
  styleUrls: ['./criar-conta.component.scss']
})
export class CriarContaComponent {

  formCadastro!: FormGroup;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) {

  }

  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      nome: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      cnpj: ['', [Validators.required, Validators.minLength(14), Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]],
    })

    this.formCadastro.addValidators(
      this.senhasIguaisValidator(
        this.formCadastro.get('password')!, this.formCadastro.get('confirmpassword')!
      )
    )

  }

  senhasIguaisValidator(controlName: AbstractControl, matchingControlName: AbstractControl): () => { match_error: string; } | null {
    return () => {
      if (controlName.value !== matchingControlName.value)
        return { match_error: 'Value does not match' };
      return null;
    };
  }

  async cadastrarUser() {
    if (!this.formCadastro.valid) {
      alert('Formulário inválido!')
      return;
    }
    const usuario: IUsuario = this.formCadastro.value;
    await this.usuarioService.postUsuario(usuario).toPromise().then(() => {
      console.log("cadastro criado!")
    }).catch(erro => console.log(erro));
    alert('Cadastro realizado com sucesso!');
    this.router.navigate(['/login']);

  }
}

