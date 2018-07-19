import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService { //or AppStateService?
  private _product$: BehaviorSubject<string>; 
  public _product: string;

  constructor() { 
    this._product$ = new BehaviorSubject("cappuccino");
  }

  get product$() {
    return this._product$.asObservable();
  }

  changeProduct(newProduct: string) {
    this._product$.next(newProduct);
    console.log("someone updated the product");
  }
}


