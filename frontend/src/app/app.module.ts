import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from "./components/templates/sidebar/sidebar.component";
import { FazendaCreateComponent } from './components/fazenda/fazenda-create/fazenda-create.component';
import { FazendaReadComponent } from './components/fazenda/fazenda-read/fazenda-read.component';
import { FazendaUpdateComponent } from './components/fazenda/fazenda-update/fazenda-update.component';
import { FazendaDeleteComponent } from './components/fazenda/fazenda-delete/fazenda-delete.component';
import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';
import { EmpresaReadComponent } from './components/empresa/empresa-read/empresa-read.component';
import { EmpresaUpdateComponent } from './components/empresa/empresa-update/empresa-update.component';
import { EmpresaDeleteComponent } from './components/empresa/empresa-delete/empresa-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
