import { LoveleeApi } from './shared/lovelee-api.service';
import { Categories } from './../pages/categories/categories';
import { MyWines } from './../pages/my-wines/my-wines';
// import { MyWines } from '../pages/pages';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Http } from '@angular/http';
import { HttpModule} from "@angular/http";

// http://stackoverflow.com/questions/41389126/no-provider-for-connectionbackend-for-ionic-2

@Component({
  templateUrl: 'app.html',
  providers: [
    LoveleeApi,
    HttpModule
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyWines;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'List', component: ListPage }
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  // }

  goHome() {
    this.nav.push(MyWines);
  }

  goToCategories() {
    this.nav.push(Categories);
  }
}
