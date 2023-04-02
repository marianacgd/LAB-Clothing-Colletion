import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IColecao } from 'src/app/interfaces/colecao';
import { ColecaoService } from 'src/app/services/colecao.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-acao-colecao',
  templateUrl: './acao-colecao.component.html',
  styleUrls: ['./acao-colecao.component.scss']
})
export class AcaoColecaoComponent implements OnInit {

  formCriaColecao!: FormGroup;

  colecao: IColecao[] = [];
  colecaoID: string = '';

  constructor(private fb: FormBuilder, private colecaoService: ColecaoService, private router: Router, private activateRoute: ActivatedRoute, private modeloService: ModeloService) {
    this.formCriaColecao = this.fb.group({
      nomeColecao: ['', [Validators.required]],
      responsavel: ['', [Validators.required]],
      estacao: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      orcamento: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      ano: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  ngOnInit(): void {

    this.colecaoID = this.activateRoute.snapshot.paramMap.get('id')!;

    if (this.colecaoID !== null) {
      this.getColecao();
    }
  }

  getColecao() {
    this.colecaoService.getColecaoPorId(this.colecaoID).subscribe((data) => {
      this.formCriaColecao.controls["nomeColecao"].setValue(data.nomeColecao);
      this.formCriaColecao.controls["responsavel"].setValue(data.responsavel);
      this.formCriaColecao.controls["estacao"].setValue(data.estacao);
      this.formCriaColecao.controls["marca"].setValue(data.marca);
      this.formCriaColecao.controls["orcamento"].setValue(data.orcamento);
      this.formCriaColecao.controls["ano"].setValue(data.ano);
    })
  }

  async criarColecao() {
    if (!this.formCriaColecao.valid) {
      alert('Formulário inválido!');
      return;
    }
    const colecao: IColecao = this.formCriaColecao.value;
    if (this.colecaoID === null) {
      await this.colecaoService.postColecao(colecao).toPromise()
        .then(() => {
          alert('Coleção criada com sucesso!');
          this.router.navigate(['/colecoes']);
        })
        .catch(erro => alert('Erro ao incluir!'));
    }
    else {
      colecao.id = this.colecaoID;
      await this.colecaoService.putColecao(colecao).toPromise()
        .then(() => {
          alert('Coleção alterada com sucesso!');
          this.router.navigate(['/colecoes']);
        })
        .catch(erro => alert('Erro ao alterar !'));
    }
  }

  async deletarColecao() {
    await this.modeloService.getModelosPorIdColecao(Number(this.colecaoID)).subscribe(async data => {
      if (data!.length > 0) {
        alert('Coleção possuí modelos cadastrados!');
        return
      }
      await this.colecaoService.deleteColecao(Number(this.colecaoID)).toPromise()
        .then(() => {
          alert('Coleção deletada com sucesso!');
          this.router.navigate(['/colecoes']);
        })
        .catch(erro => alert('Erro ao deletar!'));
    })
  }
}
