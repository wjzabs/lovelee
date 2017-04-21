import { WineHome } from './../wine-home/wine-home';
import { LoveleeApi } from './../../app/shared/lovelee-api.service';
import { Categories } from './../categories/categories';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-my-wines',
  templateUrl: 'my-wines.html',
})
export class MyWines {

  favorites = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loveleeApi: LoveleeApi,
    public loadingController: LoadingController) {

  }

  gotoCategories() {
    this.navCtrl.push(Categories);
  }

  ionViewDidLoad() {
    let allWinesHere = [];
    let allGradesHere = [];
    let myName = this.loveleeApi.myName;
    let favorites = []; // this.loveleeApi.favorites;
   //  favorites = [];

    this.loveleeApi.getAllWines().subscribe(data => {
      allWinesHere = data;

      this.loveleeApi.getAllGrades().subscribe(data => {
        allGradesHere = data;
     //   console.log(this.loveleeApi.allGrades);

        // for (var index = 0; index < this.loveleeApi.allGrades.length; ++index) {
        //   console.log(this.loveleeApi.allGrades[index]);
        // }
       
        this.loveleeApi.allGrades.forEach(function(grade) {
          //  console.log('foreach',entry);
          if ((grade.guest == myName) && (grade.grade == 5)) {
            let wine = allWinesHere.find((w) => w.id == grade.wineId);
            favorites.push(wine);
           //  console.log(grade);
          }
        });

      //  console.log('done with',favorites);

        // var a = ["a", "b", "c"];
        // a.forEach(function(entry) {
        //     console.log(entry);
        // });
      })
 //   console.log('assign', favorites);
     // this.loveleeApi.favorites = favorites;
      this.favorites = favorites;
    })

    console.log('ionViewDidLoad MyWines');
  }

  favoriteTapped($event, wine) {
    let loader = this.loadingController.create({
      content: 'Getting Wine Data ...',
      dismissOnPageChange: true
    });
    loader.present();
    this.loveleeApi.getCategoryData(wine.category)
      .subscribe(t => {
        this.loveleeApi.currentWine = wine;
        this.navCtrl.push(WineHome, wine)
      });
  }
}
