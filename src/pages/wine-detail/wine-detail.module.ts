import { NgModule } from '@angular/core';
// import { IonicModule } from 'ionic-angular';
import { WineDetail } from './wine-detail';

@NgModule({
  declarations: [
    WineDetail,
  ],
  imports: [
  //  IonicModule.forChild(Standings),
  ],
  exports: [
    WineDetail
  ]
})
export class WineDetailModule {}
