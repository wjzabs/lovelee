import { WineHome } from './../wine-home/wine-home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoveleeApi } from "../../app/shared/lovelee-api.service";

@IonicPage()
@Component({
  selector: 'page-wines',
  templateUrl: 'wines.html',
})
export class Wines {

  // wines = [
  //   {id:1, name: "Wine 1"},
  //   {id:2, name: "Wine 2"},
  //   {id:3, name: "Wine 3"}
  // ]
  wines = [];

  selectedCategory = {id: 0, name: "All"};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loveleeApi: LoveleeApi) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Wines');

    let selectedCategory = this.navParams.data;
    this.selectedCategory = selectedCategory;
    console.log('selectedCategory = ',selectedCategory);

    this.loveleeApi.getCategoryData(selectedCategory).subscribe(data => {
      this.wines = data;
      this.loveleeApi.currentCategoryWines = data;
     // console.log('selectedCategoryWines = ',data);
    })
  }

  itemTapped($event, wine) {
    this.loveleeApi.currentWine = wine;
    this.navCtrl.push(WineHome, wine);
  }
}
