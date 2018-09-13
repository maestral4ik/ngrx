import { Car } from "../models/car.model";

export interface appState{
    carPage:{
        cars: Car[]
    }
}