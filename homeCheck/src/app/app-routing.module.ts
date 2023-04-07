import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaImoveisComponent } from './imoveis/lista-imoveis/lista-imoveis.component';
import { EditarPerfilComponent } from './imoveis/imoveis/pages/editar-perfil/editar-perfil.component';
import { CadastrarImovelComponent } from './imoveis/imoveis/pages/cadastrar-imovel/cadastrar-imovel.component';
import { AtualizarDashboardComponent } from './imoveis/imoveis/pages/atualizar-dashboard/atualizar-dashboard.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home',
  },
  {
    path:'home',
    loadChildren:()=> import('./home/home.module').then((m)=> m.HomeModule),

  },
  {
    path:'imoveis',
    loadChildren:()=> import('./imoveis/imoveis.module').then((m)=>m.ImoveisModule),
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
