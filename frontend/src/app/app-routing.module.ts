import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FazendaCreateComponent } from './components/fazenda/fazenda-create/fazenda-create.component';
import { FazendaReadComponent } from './components/fazenda/fazenda-read/fazenda-read.component';
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'sidebar',
    component: SidebarComponent
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
    path: 'empresa/create',
    component: EmpresaCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
