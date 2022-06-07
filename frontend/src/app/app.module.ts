import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from "./components/templates/sidebar/sidebar.component";
import { FazendaCreateComponent } from './components/fazenda/fazenda-create/fazenda-create.component';
import { FazendaReadComponent } from './components/fazenda/fazenda-read/fazenda-read.component';
import { FazendaUpdateComponent } from './components/fazenda/fazenda-update/fazenda-update.component';
import { FazendaDeleteComponent } from './components/fazenda/fazenda-delete/fazenda-delete.component';
import { GraoCreateComponent } from './components/grao/grao-create/grao-create.component';
import { GraoUpdateComponent } from './components/grao/grao-update/grao-update.component';
import { GraoDeleteComponent } from './components/grao/grao-delete/grao-delete.component';
import { GraoReadComponent } from './components/grao/grao-read/grao-read.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FazendaCreateComponent,
    FazendaReadComponent,
    FazendaUpdateComponent,
    FazendaDeleteComponent,
    GraoCreateComponent,
    GraoUpdateComponent,
    GraoDeleteComponent,
    GraoReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
