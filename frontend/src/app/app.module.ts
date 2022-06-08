import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { SidebarComponent } from "./components/templates/sidebar/sidebar.component";
import { FazendaCreateComponent } from './components/fazenda/fazenda-create/fazenda-create.component';
import { FazendaReadComponent } from './components/fazenda/fazenda-read/fazenda-read.component';
import { FazendaUpdateComponent } from './components/fazenda/fazenda-update/fazenda-update.component';
import { FazendaDeleteComponent } from './components/fazenda/fazenda-delete/fazenda-delete.component';
<<<<<<< HEAD
import { GraoCreateComponent } from './components/grao/grao-create/grao-create.component';
import { GraoUpdateComponent } from './components/grao/grao-update/grao-update.component';
import { GraoDeleteComponent } from './components/grao/grao-delete/grao-delete.component';
import { GraoReadComponent } from './components/grao/grao-read/grao-read.component';
=======
import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';
import { EmpresaReadComponent } from './components/empresa/empresa-read/empresa-read.component';
import { EmpresaUpdateComponent } from './components/empresa/empresa-update/empresa-update.component';
import { EmpresaDeleteComponent } from './components/empresa/empresa-delete/empresa-delete.component';
<<<<<<< HEAD
import { LoginViewComponent } from './views/login-view/login-view.component';
=======
>>>>>>> 190530f226cd766b53a18882ad1f0f40e42f0fa6
>>>>>>> 5aa5e8d7480f4182ee643e4088dc27d2c3eee396

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FuncionarioCreateComponent,
    FuncionarioReadComponent,
    FuncionarioUpdateComponent,
    FuncionarioDeleteComponent,
    FazendaCreateComponent,
    FazendaReadComponent,
    FazendaUpdateComponent,
    FazendaDeleteComponent,
<<<<<<< HEAD
    GraoCreateComponent,
    GraoUpdateComponent,
    GraoDeleteComponent,
    GraoReadComponent
=======
    EmpresaCreateComponent,
    EmpresaReadComponent,
    EmpresaUpdateComponent,
<<<<<<< HEAD
    EmpresaDeleteComponent,
    LoginViewComponent
=======
    EmpresaDeleteComponent
>>>>>>> 190530f226cd766b53a18882ad1f0f40e42f0fa6
>>>>>>> 5aa5e8d7480f4182ee643e4088dc27d2c3eee396
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
