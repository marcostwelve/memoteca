import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { Title } from '@angular/platform-browser';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarpensamento',
    pathMatch: 'full'
  },
  {
    path:'criarpensamento',
    component: CriarPensamentoComponent,
    data: {Title: 'Criar pensamento'}
  },
  {
    path: 'listarpensamento',
    component: ListarPensamentoComponent,
    data: {Title: 'Listar Pensamento'}
  },
  {
    path: 'pensamentos/excluirpensamento/:id',
    component: ExcluirPensamentoComponent,
    data: {Title: 'Excluir Pensamento'}
  },
  {
    path: 'pensamentos/editarpensamento/:id',
    component: EditarPensamentoComponent,
    data: {Title: 'Editar Pensamento'}

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
