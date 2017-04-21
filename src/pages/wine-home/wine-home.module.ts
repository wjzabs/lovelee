import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { WineHome } from './wine-home';

@NgModule({
  declarations: [
    WineHome,
  ],
  imports: [
//    IonicModule.forChild(WineHome),
  ],
  exports: [
    WineHome
  ]
})
export class WineHomeModule {}
