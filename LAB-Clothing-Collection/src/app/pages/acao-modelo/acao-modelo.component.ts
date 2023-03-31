import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IColecao } from 'src/app/interfaces/colecao';
import { IModelo } from 'src/app/interfaces/modelo';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-acao-modelo',
  templateUrl: './acao-modelo.component.html',
  styleUrls: ['./acao-modelo.component.scss']
})
export class AcaoModeloComponent implements OnInit{

  formCriaModelo!: FormGroup;

  modelo: IModelo[] = [];
  modeloID: string = '';
  colecoes: IColecao[] = [];

  constructor(private fb: FormBuilder, private modeloService: ModeloService, private router: Router, private activateRoute: ActivatedRoute, private colecaoService: ColecaoService){
    this.formCriaModelo = this.fb.group({
      nomeModelo: ['', [Validators.required]],
      tipoModelo: ['', [Validators.required]],
      idColecao: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      possuiBordado: ['', [Validators.required]],
      possuiEstampa: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

    this.modeloID = this.activateRoute.snapshot.paramMap.get('id')!;

    if(this.modeloID !== null){
      this.getModelo();
    }
    
    this.listarColecoesSelect()
    
  }

  getModelo(){
    this.modeloService.getModelosPorId(this.modeloID).subscribe((data) => {      
      this.formCriaModelo.controls["nomeModelo"].setValue(data.nomeModelo);
      this.formCriaModelo.controls["tipoModelo"].setValue(data.tipoModelo);
      this.formCriaModelo.controls["idColecao"].setValue(data.idColecao);
      this.formCriaModelo.controls["responsavel"].setValue(data.responsavel);
      this.formCriaModelo.controls["possuiBordado"].setValue(data.possuiBordado);
      this.formCriaModelo.controls["possuiEstampa"].setValue(data.possuiEstampa);
    
    })

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
    
    if(this.modeloID === null){
      await this.modeloService.postModelo(modelo).toPromise()
      .then(()=>{
        alert('Modelo criado com sucesso!');
        this.router.navigate(['/modelos']);
      })
      .catch(erro=> alert('Erro ao incluir!'));        
    }
    else{
      modelo.id = this.modeloID;
      await this.modeloService.putModelo(modelo).toPromise()
      .then(()=> {
        alert('Modelo alterado com sucesso!');
        this.router.navigate(['/modelos']);
      })
      .catch(erro=> alert('Erro ao alterar!'));
    }    
  }

  async deletarModelo(){
    await this.modeloService.deleteModelo(Number(this.modeloID)).toPromise()
    .then(()=> {
      alert('Modelo deletado com sucesso!');
      this.router.navigate(['/modelos']);
    })
    .catch(erro=> alert('Erro ao deletar!'));
  }

}
