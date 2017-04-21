import { LoveleeApi } from './../../app/shared/lovelee-api.service';
//import { MyWines } from './../my-wines/my-wines';
import { Wines } from './../wines/wines'; //./../shared/shared'; // 
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class Categories {

  categories: any;

  // categories = [
  //   {id: 1, name: 'cat1'},
  //   {id: 2, name: 'cat2'}
  // ]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loveleeApi: LoveleeApi,
    private loadingController: LoadingController) {
    //,     public loveleeApi: LoveleeApi
  }

  // ionViewLoaded
  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting Wine Categories ...',
      // spinner: 'dots'
    });
    loader.present().then(() => {

      this.loveleeApi.getCategories().then(data => {
        this.categories = data;
        loader.dismiss();
        console.log('categories', this.categories);
      });
    });

    console.log('ionViewDidLoad Categories');
  }

  // ionViewWillEnter() {
  //   console.log('ionViewWillEnter Categories');
  // }

  // ionViewWillLeave() {
  //   console.log('ionViewWillLeave Categories');
  // }

  ionDidUnload() {
    console.log('ionDidUnload Categories - NOT FIRING');
    // not firing
    // http://stackoverflow.com/questions/5594410/viewdidunload-is-not-getting-called-at-all

  }

  itemTapped($event, category) {
    this.navCtrl.push(Wines, category);
  }
}
