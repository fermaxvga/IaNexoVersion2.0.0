import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManifiestoRoutingModule } from './manifiesto-routing.module';


import { ManifiestoListComponent } from './components/manifiesto-list/manifiesto-list.component';
import { ManifiestoModifyComponent } from './components/manifiesto-modify/manifiesto-modify.component';
import { ManifiestoNewComponent } from './components/manifiesto-new/manifiesto-new.component';





@NgModule({
  declarations: [ManifiestoListComponent, 
                 ManifiestoModifyComponent, 
                 ManifiestoNewComponent],
  imports: [
    CommonModule,
    ManifiestoRoutingModule
  ],
  exports:[
    ManifiestoListComponent, ManifiestoModifyComponent, ManifiestoNewComponent
  ]
})
export class ManifiestoModule { }
