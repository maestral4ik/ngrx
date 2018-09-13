import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../models/car.model';
import { appState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import { carsService } from '../cars.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent{

  @Input() car: Car;
  constructor(private store: Store<appState>, private service: carsService){}
  onDelete(){
    this.service.deleteCar(this.car);
    this.service.loadingCars();
  }
  carSold(){
    this.car.isSold = true
    this.service.updateCar(this.car)
  }
}
