import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'; 
import { ManifiestoNewComponent } from './components/manifiesto-new/manifiesto-new.component';
import { ManifiestoListComponent } from './components/manifiesto-list/manifiesto-list.component';
import { ManifiestoModifyComponent } from './components/manifiesto-modify/manifiesto-modify.component';


const routes: Routes=[
  {
    path:'',
    children:[
      {path:'nuevo',component:ManifiestoNewComponent},
      {path:'listado', component:ManifiestoListComponent},
      {path:'modificar',component:ManifiestoModifyComponent},
      {path:'**',redirectTo:'nuevo'}
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ManifiestoRoutingModule { }
