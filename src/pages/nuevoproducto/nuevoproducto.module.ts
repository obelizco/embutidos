import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoproductoPage } from './nuevoproducto';

@NgModule({
  declarations: [
    NuevoproductoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoproductoPage),
  ],
})
export class NuevoproductoPageModule {}
