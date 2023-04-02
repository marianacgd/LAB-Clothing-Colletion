import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IModelo } from 'src/app/interfaces/modelo';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  modelos: IModelo[] = [];

  pagePagination = 1;
  pageSizePagination = 7;

  constructor(private modeloService: ModeloService, private colecaoService: ColecaoService, private router: Router) { }

  ngOnInit(): void {

    this.listarModelos()

  }

  listarModelos() {
    this.modeloService.getModelos().subscribe((data) => {
      this.modelos = data;
      this.modelos.map((value, _) => {
        this.colecaoService.getColecaoPorId(value.idColecao.toString()).subscribe(dataColecao => value.sltColecao = dataColecao.nomeColecao )
      })
    })
  }

  editarModelo(modelo: IModelo) {
    this.router.navigate([`/criarmodelo/${modelo.id}`])
  }

}
