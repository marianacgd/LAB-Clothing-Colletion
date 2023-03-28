import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IColecao } from 'src/app/interfaces/colecao';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-criar-colecao',
  templateUrl: './criar-colecao.component.html',
  styleUrls: ['./criar-colecao.component.scss']
})
export class CriarColecaoComponent implements OnInit {

  formCriaColecao!: FormGroup;

  colecao: IColecao[] = [];

  constructor(private fb: FormBuilder, private colecaoService: ColecaoService, private router: Router){

  }

  ngOnInit(): void {
    this.formCriaColecao = this.fb.group({
      nomeColecao: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      estacao: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      orcamento: ['', [Validators.required]],
      ano: ['', [Validators.required]]
    })
    
  }


  async criarColecao(){
    if(!this.formCriaColecao.valid){
      alert('Formulário inválido!');
      return;
    }
    const colecao: IColecao = this.formCriaColecao.value;
    await this.colecaoService.postColecao(colecao).toPromise().then(()=>{
      console.log("coleção criada!")}).catch(erro=>console.log(erro));
      alert('Coleção criada com sucesso!');
      this.router.navigate(['/colecoes']);
  }

}
