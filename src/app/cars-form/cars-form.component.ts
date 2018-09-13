import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Car } from '../models/car.model';
import * as moment from 'moment';
import { appState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import { carsService } from '../cars.service';


@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {
  private id: number = 2;
  carName: string = '';
  carModel: string = '';

  constructor(private store: Store<appState>, private carServ: carsService) { }

  ngOnInit() {
  }
  @Output() addCar = new EventEmitter<Car>();
  onAdd(){
    if(this.carModel === '' || this.carName === '') return
    const car = new Car(this.carName,moment().format('DD.MM.YY'),this.carModel)
    this.carServ.addCar(car)

    this.carName = '';
    this.carModel = '';
  }
  onLoad(){
    this.carServ.loadingCars();
  }
}
