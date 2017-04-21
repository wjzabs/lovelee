import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Grade } from './grade';

@NgModule({
  declarations: [
    Grade,
  ],
  imports: [
  //  IonicModule.forChild(Grade),
  ],
  exports: [
    Grade
  ]
})
export class GradeModule {}
