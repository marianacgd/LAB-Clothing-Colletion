import { Component, OnInit } from '@angular/core';
import { IColecao } from 'src/app/interfaces/colecao';
import { ColecaoService } from 'src/app/services/colecao.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  colecoes: IColecao[] = [];

  constructor(private colecaoService: ColecaoService){}

  ngOnInit(): void {

    this.listarColecoesMaiorOrcamento();
    
  }

  listarColecoesMaiorOrcamento(){
    this.colecaoService.getColecoesMaxValorDesc().subscribe((data) => {
      this.colecoes = data;
    })
  }

}
