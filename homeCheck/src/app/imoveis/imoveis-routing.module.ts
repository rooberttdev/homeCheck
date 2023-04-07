import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarDashboardComponent } from './imoveis/pages/atualizar-dashboard/atualizar-dashboard.component';
import { CadastrarImovelComponent } from './imoveis/pages/cadastrar-imovel/cadastrar-imovel.component';
import { EditarPerfilComponent } from './imoveis/pages/editar-perfil/editar-perfil.component';
import { ImoveisComponent } from './imoveis/ImoveisComponent';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';


const routes: Routes = [
   {
    path:'',
    component:ImoveisComponent
   },
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
export class ImoveisRoutingModule { }
