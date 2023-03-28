import { Component, OnInit } from '@angular/core';
import { IColecao } from 'src/app/interfaces/colecao';
import { IModelo } from 'src/app/interfaces/modelo';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  colecoesMaior: IColecao[] = [];
  colecoes: IColecao[] = [];
  numeroDeColecoes: string = '';
  modelos: IModelo[] = [];
  numeroDeModelos: string = '';

  constructor(private colecaoService: ColecaoService, private modeloService: ModeloService){}

  ngOnInit(): void {

    this.listarColecoesMaiorOrcamento();
    this.listarColecoes();
    this.listarModelos();    
  }

  listarColecoesMaiorOrcamento(){
    this.colecaoService.getColecoesMaxValorTop5().subscribe((data) => {
      this.colecoesMaior = data;
      console.log(this.colecoesMaior);
    })
    
  }

  listarColecoes(){
    this.colecaoService.getColecoes().subscribe((data) => {
      this.colecoes = data;
      console.log(this.colecoes.length);
    })
    this.numeroDeColecoes = this.colecoes.length.toString();
  }

  listarModelos(){
    this.modeloService.getModelos().subscribe((data) => {
      this.modelos = data;
      console.log(this.modelos.length);
    })
    this.numeroDeModelos = this.modelos.length.toString();
  }

  orcamentoMedio(){
      
  }

}

