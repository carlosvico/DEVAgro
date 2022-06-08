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

import { GraoCreateComponent } from './components/grao/grao-create/grao-create.component';
import { GraoUpdateComponent } from './components/grao/grao-update/grao-update.component';
import { GraoDeleteComponent } from './components/grao/grao-delete/grao-delete.component';
import { GraoReadComponent } from './components/grao/grao-read/grao-read.component';

import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';
import { EmpresaReadComponent } from './components/empresa/empresa-read/empresa-read.component';
import { EmpresaUpdateComponent } from './components/empresa/empresa-update/empresa-update.component';
import { EmpresaDeleteComponent } from './components/empresa/empresa-delete/empresa-delete.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginViewComponent } from './views/login-view/login-view.component';
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
    GraoCreateComponent,
    GraoUpdateComponent,
    GraoDeleteComponent,
    GraoReadComponent,
    EmpresaCreateComponent,
    EmpresaReadComponent,
    EmpresaUpdateComponent,
    EmpresaDeleteComponent,
    LoginViewComponent,
    EmpresaDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
