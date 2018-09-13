import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsFormComponent } from './cars-form/cars-form.component';
import { CarComponent } from './car/car.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from './redux/cars.reducer';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
// import { carsService } from './cars.service';
import { HttpClientModule } from '@angular/common/http';

import { carsService } from './cars.service';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffects } from './redux/cars.effect';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({carPage: carsReducer}),
    RouterModule.forRoot([
      {path: '', component: AppComponent}
    ]),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([CarsEffects  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
