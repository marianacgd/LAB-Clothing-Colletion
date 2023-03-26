import { Component, OnInit } from '@angular/core';
import { IModelo } from 'src/app/interfaces/modelo';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit {

  modelos: IModelo[] = [];

  constructor (private modeloService: ModeloService) {}

  ngOnInit(): void {

    this.listarModelos()
    
  }

  listarModelos(){
    this.modeloService.getModelos().subscribe((data) => {
      this.modelos = data;
    })
  }

}
