import { LoveleeApi } from './../../app/shared/lovelee-api.service';
// import { MyWines } from './../my-wines/my-wines';
import { WineDetail } from './../wine-detail/wine-detail';
import { Grade } from './../grade/grade';
// import { Standings } from './../standings/standings';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-wine-home',
  templateUrl: 'wine-home.html',
})
export class WineHome {
  wine: any;
  wineDetailTab = WineDetail;
  gradeTab = Grade;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loveleeApi: LoveleeApi) {

    this.wine = this.navParams.data;
    console.log('winehome-constructor',this.wine);
  }

  ionViewDidLoad() {
    this.wine = this.navParams.data;
    console.log('winehome-didload',this.wine);
    console.log('ionViewDidLoad WineHome');
  }

  goHome() {
    // this.navCtrl.push(MyWines);
    this.navCtrl.popToRoot();
  }

}
