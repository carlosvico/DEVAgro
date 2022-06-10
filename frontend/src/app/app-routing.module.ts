import { GraoCreateComponent } from './components/grao/grao-create/grao-create.component';
import { GraoReadComponent } from './components/grao/grao-read/grao-read.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FazendaCreateComponent } from './components/fazenda/fazenda-create/fazenda-create.component';
import { FazendaReadComponent } from './components/fazenda/fazenda-read/fazenda-read.component';
import { FazendaUpdateComponent } from './components/fazenda/fazenda-update/fazenda-update.component';
import { SidebarComponent } from './components/templates/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: "grao",
    component: GraoReadComponent
  },
  {
    path: "grao/create",
    component:GraoCreateComponent
  },
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
    path: 'fazenda/update',
    component: FazendaUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
