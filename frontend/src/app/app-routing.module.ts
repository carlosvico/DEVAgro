import { FuncionarioCrudComponent } from './views/funcionario-crud/funcionario-crud.component';
import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';
import { GraoCreateComponent } from './components/grao/grao-create/grao-create.component';
import { GraoReadComponent } from './components/grao/grao-read/grao-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FazendaCreateComponent } from './components/fazenda/fazenda-create/fazenda-create.component';
import { FazendaDeleteComponent } from './components/fazenda/fazenda-delete/fazenda-delete.component';
import { FazendaUpdateComponent } from './components/fazenda/fazenda-update/fazenda-update.component';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { GraoUpdateComponent } from './components/grao/grao-update/grao-update.component';
import { FazendaCrudComponent } from './views/fazenda-crud/fazenda-crud.component';
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { GraoDeleteComponent } from './components/grao/grao-delete/grao-delete.component';
import {NotFoundComponent} from './views/not-found/not-found.component'

const routes: Routes = [
  {
    path: 'funcionario',
    component: FuncionarioCrudComponent
  },
  {
    path: 'funcionario/read',
    component: FuncionarioReadComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
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
    path: 'funcionario/delete/:id',
    component: FuncionarioDeleteComponent
  },
  {
    path: 'fazenda',
    component: FazendaCrudComponent
  },
  {
    path: 'fazenda/create',
    component: FazendaCreateComponent
  },
  {
    path: 'fazenda/update/:id',
    component: FazendaUpdateComponent
  },
  {
    path: 'fazenda/delete/:id',
    component: FazendaDeleteComponent
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
    path: 'grao/update/:id',
    component: GraoUpdateComponent
  },
  {
    path: 'grao/delete/:id',
    component: GraoDeleteComponent
  },
  {
    path: 'empresa/create',
    component: EmpresaCreateComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
