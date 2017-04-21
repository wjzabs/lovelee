import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Categories } from './categories';

@NgModule({
  declarations: [
    Categories,
  ],
  imports: [
  //  IonicModule.forChild(Categories),
  ],
  exports: [
    Categories
  ]
})
export class CategoriesModule {}
