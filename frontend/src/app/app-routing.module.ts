import { GraoCreateComponent } from './components/grao/grao-create/grao-create.component';
import { GraoReadComponent } from './components/grao/grao-read/grao-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FazendaCreateComponent } from './components/fazenda/fazenda-create/fazenda-create.component';
import { FazendaDeleteComponent } from './components/fazenda/fazenda-delete/fazenda-delete.component';
import { FazendaReadComponent } from './components/fazenda/fazenda-read/fazenda-read.component';
import { FazendaUpdateComponent } from './components/fazenda/fazenda-update/fazenda-update.component';
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { GraoUpdateComponent } from './components/grao/grao-update/grao-update.component';

const routes: Routes = [
  {
    path: 'funcionario',
    redirectTo: '/funcionario/read',
    pathMatch: 'full'
  },
  {
    path: 'funcionario/read',
    component: FuncionarioReadComponent
  },
  {
    path: 'funcionario/create',
    component: FuncionarioCreateComponent
  },
  {
    path: 'funcionario/update/:id',
    component: FuncionarioUpdateComponent
  },
  {
    path: 'fazenda',
    redirectTo: '/fazenda/read',
    pathMatch: 'full'
  },
  {
    path: 'fazenda/read',
    component: FazendaReadComponent
  },
  {
    path: 'fazenda/create',
    component: FazendaCreateComponent
  },
  {
    path: 'fazenda/update',
    component: FazendaUpdateComponent
  },
  {
    path: 'grao',
    redirectTo: '/grao/read',
    pathMatch: 'full'
  },
  {
    path: 'grao/read',
    component: GraoReadComponent
  },
  {
    path: 'grao/create',
    component: GraoCreateComponent
  },
  {
    path: 'grao/update',
    component: GraoUpdateComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
