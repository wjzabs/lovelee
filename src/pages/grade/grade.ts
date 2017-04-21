import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LoveleeApi } from "../../app/shared/lovelee-api.service";

@IonicPage()
@Component({
  selector: 'page-grade',
  templateUrl: 'grade.html'
})
export class Grade {
  wine: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loveleeApi: LoveleeApi,
    private loadingController: LoadingController, 
    private toastController: ToastController) {

      this.wine = this.navParams.data;
  }

  gradeTapped(grade) {
 
    let toast = this.toastController.create( {
      message: 'You have Graded this wine with a ' + grade,
      duration: 2000, 
      position: 'bottom'
    });
    toast.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Grade');
    this.wine = this.navParams.data;
    console.log("wine in grade page ->",this.wine);
  }
}