import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { BoxLoginComponent } from './components/box-login/box-login.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { CriarContaComponent } from './pages/criar-conta/criar-conta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from './services/usuario.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';
import { ColecoesComponent } from './pages/colecoes/colecoes.component';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { CardListagemComponent } from './components/card-listagem/card-listagem.component';
import { AcaoColecaoComponent } from './pages/acao-colecao/acao-colecao.component';
import { AcaoModeloComponent } from './pages/acao-modelo/acao-modelo.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    ContentComponent,
    LoginComponent,
    MenuComponent,
    HeaderComponent,
    BoxLoginComponent,
    EsqueciSenhaComponent,
    CriarContaComponent,
    DashboardComponent,
    CardDashboardComponent,
    ColecoesComponent,
    ModelosComponent,
    CardListagemComponent,
    AcaoColecaoComponent,
    AcaoModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
