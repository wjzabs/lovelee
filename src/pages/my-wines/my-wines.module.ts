import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyWines } from './my-wines';

@NgModule({
  declarations: [
    MyWines,
  ],
  imports: [
  //  IonicModule.forChild(MyWines),
  ],
  exports: [
    MyWines
  ]
})
export class MyWinesModule {}
