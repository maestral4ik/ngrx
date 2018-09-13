import { Component, OnInit } from '@angular/core';
import { Car, Cars } from './models/car.model';
import { Store } from '@ngrx/store';
import { appState } from './redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public carState: Observable<Cars>

  constructor( private store: Store<appState> ){}

  ngOnInit(){
    this.carState = this.store.select('carPage')
  }

}
