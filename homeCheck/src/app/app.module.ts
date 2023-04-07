import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider'
import { ImoveisModule } from './imoveis/imoveis.module';
import { ImoveisComponent } from "./imoveis/imoveis/ImoveisComponent";
import { AtualizarDashboardComponent } from './imoveis/imoveis/pages/atualizar-dashboard/atualizar-dashboard.component';
import { CadastrarImovelComponent } from './imoveis/imoveis/pages/cadastrar-imovel/cadastrar-imovel.component';
import { EditarPerfilComponent } from './imoveis/imoveis/pages/editar-perfil/editar-perfil.component';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    EditarPerfilComponent,
    CadastrarImovelComponent,
    AtualizarDashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ImoveisModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
