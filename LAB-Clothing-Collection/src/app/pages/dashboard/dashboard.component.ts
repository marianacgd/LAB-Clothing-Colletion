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
  modelosPorColecao: string = '';
  orcamentoMedio: number = 0;

  constructor(private colecaoService: ColecaoService, private modeloService: ModeloService) { }

  ngOnInit(): void {

    this.listarColecoesMaiorOrcamento();
    this.listarColecoes();
    this.listarModelos();
    this.calcularOrcamentoMedio();
  }

  listarColecoesMaiorOrcamento() {
    this.colecaoService.getColecoesMaxValorTop5().subscribe((data) => {
      this.colecoesMaior = data;
      this.calcularOrcamentoMedio();
      this.colecoesMaior.filter((length) => this.listarModelosPorColecao(length))
    })
  }

  listarColecoes() {
    this.colecaoService.getColecoes().subscribe((data) => {
      this.colecoes = data;
    })
    this.numeroDeColecoes = this.colecoes.length.toString();
  }

  listarModelos() {
    this.modeloService.getModelos().subscribe((data) => {
      this.modelos = data;
      // console.log(this.modelos.length);
    })
    this.numeroDeModelos = this.modelos.length.toString();
  }

  listarModelosPorColecao(colecao: IColecao) {
    this.modeloService.getModelosPorIdColecao(Number(colecao.id)).subscribe((data) => {
      colecao.modelosQtd = data!.length;
    });
  }

  calcularOrcamentoMedio() {
    this.colecoesMaior.forEach(f => {
      this.orcamentoMedio += f.orcamento!;
    })
    this.orcamentoMedio = this.orcamentoMedio / 5;
  }
}

