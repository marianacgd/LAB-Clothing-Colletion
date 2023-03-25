import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { CriarContaComponent } from './pages/criar-conta/criar-conta.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '', component: ContentComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'esqueciSenha', component: EsqueciSenhaComponent },
      { path: 'criarConta', component: CriarContaComponent }
    ],
  },
  {
    path: '', component: FullComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    ],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
