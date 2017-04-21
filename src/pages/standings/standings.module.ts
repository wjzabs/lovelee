import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Standings } from './standings';

@NgModule({
  declarations: [
    Standings,
  ],
  imports: [
  //  IonicModule.forChild(Standings),
  ],
  exports: [
    Standings
  ]
})
export class StandingsModule {}
