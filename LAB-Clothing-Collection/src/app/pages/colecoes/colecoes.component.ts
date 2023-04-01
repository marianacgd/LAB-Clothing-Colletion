import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IColecao } from 'src/app/interfaces/colecao';
import { IModelo } from 'src/app/interfaces/modelo';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class ColecoesComponent implements OnInit {

  colecoes: IColecao[] = [];
  modelosPorColecao: string = '';
  pagePagination = 1
  pageSizePagination = 3

  constructor(private colecaoService: ColecaoService, private router: Router, private modeloService: ModeloService){}

  ngOnInit(): void {

    this.listarColecoes()
        
  }

  listarColecoes(){
    this.colecaoService.getColecoes().subscribe((data) => {
      this.colecoes = data;
      this.colecoes.filter((length) => this.listarModelosPorColecao(length))
    })
  }

  listarModelosPorColecao(colecao: IColecao) {
    this.modeloService.getModelosPorIdColecao(Number(colecao.id)).subscribe((data) => {
      colecao.modelosQtd = data!.length;
    });
  }

  editarColecao(colecao: IColecao){
    this.router.navigate([`/criarcolecao/${colecao.id}`])
  }
}
