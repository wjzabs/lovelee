import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { WineDetail } from './wine-detail';

@NgModule({
  declarations: [
    WineDetail,
  ],
  imports: [
  //  IonicModule.forChild(WineDetail),
  ],
  exports: [
    WineDetail
  ]
})
export class WineDetailModule {}
