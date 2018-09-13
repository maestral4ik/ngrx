import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { CAR_ACTION, AddCar } from "./cars.action";
import { catchError, map, startWith, switchMap, mergeMap } from 'rxjs/operators';
import { Observable } from "rxjs";
import { Cars, Car } from "../models/car.model";
import { carsService } from "../cars.service";

@Injectable()
export class CarsEffects{


    constructor(private actions$: Actions, private service: carsService){}
    @Effect() 
    loadCars = this.actions$.pipe(
        ofType(CAR_ACTION.ADD_CAR),
        switchMap((action: AddCar) => {
            return this.service.preloadCars()
        }),
        mergeMap((cars: Car[]) => {
            return [
                {
                    type: CAR_ACTION.LOAD_CARS,
                    payload: cars
                }
            ]
        })
    )
}