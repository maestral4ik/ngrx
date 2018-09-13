import { Car } from "../models/car.model";
import { CAR_ACTION, CarActions } from "./cars.action";

const InitialState = {
    cars: []
}

export function carsReducer(state = InitialState, action: CarActions){
    switch (action.type){
        case CAR_ACTION.ADD_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }
        case CAR_ACTION.REMOVE_CAR:
            return {
                ...state,
                cars: [...state.cars.filter(c => c.id != action.payload.id)]
            }
        case CAR_ACTION.BUY_CAR:
            const id = state.cars.findIndex(c=>c.id === action.payload.id);
            state.cars[id].isSold=true;
            return {
            ...state,
            cars: [...state.cars]
            }
        case CAR_ACTION.LOAD_CARS:
            return {
                ...state,
                cars: [...action.payload]
            }
        default:
            return state
    }
}