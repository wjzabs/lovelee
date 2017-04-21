import { Grade } from './../pages/grade/grade';
import { HttpModule } from '@angular/http';
import { LoveleeApi } from './shared/lovelee-api.service';
import { WineHome } from './../pages/wine-home/wine-home';
import { Standings } from './../pages/standings/standings';
import { WineDetail } from './../pages/wine-detail/wine-detail';
import { Wines } from './../pages/wines/wines';
import { Categories } from './../pages/categories/categories';
import { MyWines } from './../pages/my-wines/my-wines';
//import { MyWines } from '../pages/pages';
//import { Categories } from '../pages/pages';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyWines,
    Categories,
    Wines,
    WineDetail, 
    WineHome,
    Standings,
    Grade
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyWines,
    Categories,
    Wines,
    WineDetail,
    WineHome, 
    Standings,
    Grade
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoveleeApi,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}


