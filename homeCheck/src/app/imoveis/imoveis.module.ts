import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImoveisRoutingModule } from './imoveis-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { HomeComponent } from './imoveis/pages/home/home.component';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';
import { ImoveisComponent } from './imoveis/ImoveisComponent';
import {MatCardModule} from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    HomeComponent,
    ListaImoveisComponent,
    ImoveisComponent,
   ],
  imports: [
    CommonModule,
    ImoveisRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    LayoutModule,
    MatButtonModule,
    MatListModule,

  ]
})
export class ImoveisModule { }
