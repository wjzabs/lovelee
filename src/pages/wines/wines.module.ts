import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Wines } from './wines';

@NgModule({
  declarations: [
    Wines,
  ],
  imports: [
  //  IonicModule.forChild(Wines),
  ],
  exports: [
    Wines
  ]
})
export class WinesModule {}
