import { Grade } from './../grade/grade';
// import { MyWines } from './../my-wines/my-wines';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
// import * as _ from 'lodash';
import { LoveleeApi } from "../../app/shared/lovelee-api.service";

@IonicPage()
@Component({
  selector: 'page-wine-detail',
  templateUrl: 'wine-detail.html',
})
export class WineDetail {

  gradesSummary: any[] = [];
  grades: any[];
  wine: any;
  private categoryWines: any;
  averageGrade = 0;
  myGrade = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loveleeApi: LoveleeApi,
    private loadingController: LoadingController) {
    this.wine = this.navParams.data;
  //  console.log(this.wine);
  }

  ionViewDidLoad() {
    this.wine = this.navParams.data;
    //  console.log('wine in details -> ',this.wine);
    // this.categoryData = this.loveleeApi.getCurrentCategory();
    this.categoryWines = this.loveleeApi.getCurrentCategoryWines();
    // this.categoryData = _.chain(this.categoryData)
    //       .filter(g => g.)

    let loader = this.loadingController.create({
      content: 'Getting Wine Grades ...',
      // spinner: 'dots'
    });
    loader.present().then(() => {
      this.loveleeApi.getWineGrades(this.wine).subscribe(data => {
        this.grades = data;
        loader.dismiss();

        this.gradesSummary.push({ grade: 5, gradeDesc: 'Favorite', gradeBy: '' })
        this.gradesSummary.push({ grade: 4, gradeDesc: 'Like It', gradeBy: '' })
        this.gradesSummary.push({ grade: 3, gradeDesc: 'Maybe', gradeBy: '' })
        this.gradesSummary.push({ grade: 2, gradeDesc: 'Maybe Not', gradeBy: '' })
        this.gradesSummary.push({ grade: 1, gradeDesc: 'Not for Me', gradeBy: '' })

        let totalGrade = 0;
        let totalGrades = 0;

        for (var gi = 1; gi < 6; gi++) {
          let gradeSummary = this.gradesSummary.find(g => g.grade == gi);
          // console.log(gi, gradeSummary);
          let graders = '';
          for (var i = 0; i < this.grades.length; i++) {
            if ((this.grades[i].wineId == this.wine.id) && (this.grades[i].grade == gi)) {
              graders += ',' + this.grades[i].guest;
              totalGrade += gi;
              totalGrades += 1;
            }
            if ((this.grades[i].wineId == this.wine.id) && (this.grades[i].guest == this.loveleeApi.myName)) {
              graders += ',' + this.grades[i].guest;
              this.myGrade = gi;
            }         
          }

          if (graders == '') {
            gradeSummary.gradeBy = 'Nobody';
          }
          else {
            gradeSummary.gradeBy = graders.slice(1);
          }
 
          
         //  console.log("completed",gradeSummary);
        }

        if (totalGrades != 0) {
          this.averageGrade = totalGrade/totalGrades;
        }
        // why an error?
        // this.gradesSummary.forEach(function(gradeSummary) {
        //     console.log(gradeSummary);
        // });


        // console.log('wine in details2 -> ',this.wine);

        // console.log('selectedCategoryWines = ',data);
      })
    });

    console.log('ionViewDidLoad WineDetail');
  }

  gradeClicked($event, grade) {
    let sourceGrade = this.grades.find(g => g.wineId = this.wine.id);
    this.navCtrl.parent.parent.push(Grade, sourceGrade);
  }

  //   goHome() {
  //    //  this.navCtrl.push(MyWines);
  //    // this.navCtrl.popToRoot();
  //  //  console.log(this.navCtrl.parent);
  //    this.navCtrl.parent.parent.popToRoot();
  //   }
}
