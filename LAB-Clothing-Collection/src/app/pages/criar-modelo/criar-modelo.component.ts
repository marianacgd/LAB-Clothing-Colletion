import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IColecao } from 'src/app/interfaces/colecao';
import { IModelo } from 'src/app/interfaces/modelo';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-criar-modelo',
  templateUrl: './criar-modelo.component.html',
  styleUrls: ['./criar-modelo.component.scss']
})
export class CriarModeloComponent implements OnInit{

  formCriaModelo!: FormGroup;

  modelo: IModelo[] = [];
  colecoes: IColecao[] = [];

  constructor(private fb: FormBuilder, private modeloService: ModeloService, private router: Router, private colecaoService: ColecaoService){

  }

  ngOnInit(): void {
    this.formCriaModelo = this.fb.group({
      nomeModelo: ['', [Validators.required]],
      tipoModelo: ['', [Validators.required]],
      idColecao: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      possuiBordado: ['', [Validators.required]],
      possuiEstampa: ['', [Validators.required]]
    })

    this.listarColecoesSelect()
    
  }

  listarColecoesSelect(){
    this.colecaoService.getColecoes().subscribe((data) => {
      this.colecoes = data;
    })
  }

  async criarModelo(){
    if(!this.formCriaModelo.valid){
      alert('Formulário inválido!');
      return;
    }
    const modelo: IModelo = this.formCriaModelo.value;
    await this.modeloService.postModelo(modelo).toPromise().then(()=>{
      console.log("modelo criado!")}).catch(erro=>console.log(erro));
      alert('Modelo criado com sucesso!');
      this.router.navigate(['/modelos']);
  }

}
