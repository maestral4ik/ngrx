import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { HttpClient }    from '@angular/common/http';
import { appState } from "./redux/app.state";
import { Car, Cars } from "./models/car.model";
import { LoadCars, AddCar, RemoveCar, BuyCar } from "./redux/cars.action";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class carsService{

    static BASE_URL: string = "http://localhost:4545/";

    constructor(private http: HttpClient, private store: Store<appState>){

    }

    preloadCars(): Observable<Car[]>{
        console.log('sss')
        return this.http.get<Car[]>(carsService.BASE_URL + 'cars')
    }

    loadingCars():void{
         this.http.get<Car[]>(carsService.BASE_URL + 'cars')
         .toPromise()
         .then((cars:Car[]) => {
            this.store.dispatch(new LoadCars(cars)) 
         })

    }
    addCar(car: Car){
        this.http.post<Car>(carsService.BASE_URL + 'cars', car)
            .subscribe( (car: Car) => {
                this.store.dispatch(new AddCar(car))
            } )
    }
    deleteCar(car: Car){
        console.log(car)
        this.http.delete(carsService.BASE_URL + 'cars/' + car.id)
            .toPromise()
            .then( _ => {
                this.store.dispatch(new RemoveCar(car))
            })
    }
    updateCar(car: Car){
        this.http.put<Car>(carsService.BASE_URL+'cars/'+car.id, car) 
            .subscribe( (car: Car ) => {
                this.store.dispatch(new BuyCar(car))
            })
    }
}