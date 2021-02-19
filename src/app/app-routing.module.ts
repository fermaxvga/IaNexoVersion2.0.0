import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path:'home',
  loadChildren:()=>import('./pages/home/home.module').then(m=>m.HomeModule)
},
{ path:'manifiesto',
  loadChildren:()=>import('./pages/manifiesto/manifiesto.module').then(m=>m.ManifiestoModule)
},
{
 path:'procedimientos',
 loadChildren:()=>import('./pages/procedimientos/procedimientos.module').then(m=>m.ProcedimientosModule)
},
{
    path:'**',
    redirectTo:'home'
  },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
