import { Component, OnInit } from '@angular/core';
import { IColecao } from 'src/app/interfaces/colecao';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class ColecoesComponent implements OnInit {

  colecoes: IColecao[] = [];

  constructor(private colecaoService: ColecaoService){}

  ngOnInit(): void {

    this.listarColecoes()
    
  }

  listarColecoes(){
    this.colecaoService.getColecoes().subscribe((data) => {
      this.colecoes = data;
    })
  }

}
