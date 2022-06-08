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
import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';
import { EmpresaReadComponent } from './components/empresa/empresa-read/empresa-read.component';
import { EmpresaUpdateComponent } from './components/empresa/empresa-update/empresa-update.component';
import { EmpresaDeleteComponent } from './components/empresa/empresa-delete/empresa-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    EmpresaCreateComponent,
    EmpresaReadComponent,
    EmpresaUpdateComponent,
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
