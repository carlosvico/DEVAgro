import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from "./components/templates/sidebar/sidebar.component";
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FuncionarioCreateComponent,
    FuncionarioReadComponent,
    FuncionarioUpdateComponent,
    FuncionarioDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
