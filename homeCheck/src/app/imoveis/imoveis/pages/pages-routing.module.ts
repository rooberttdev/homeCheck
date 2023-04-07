import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaImoveisComponent } from '../../lista-imoveis/lista-imoveis.component';
import { AtualizarDashboardComponent } from './atualizar-dashboard/atualizar-dashboard.component';
import { CadastrarImovelComponent } from './cadastrar-imovel/cadastrar-imovel.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';

const routes: Routes = [
  {
    path:'imoveis',
    component:ListaImoveisComponent
    },
    {
      path:'editar-perfil',
      component: EditarPerfilComponent
    },{
      path:'cadastrar-imovel',
      component:CadastrarImovelComponent
      
    },
    {
      path:'dashboard',
      component:AtualizarDashboardComponent
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
