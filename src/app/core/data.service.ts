import { Injectable } from '@angular/core';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService { //or AppStateService?

  private _state$: BehaviorSubject<State>;
  public _state: State;

  constructor() { 
    this._state$ = new BehaviorSubject(new State());
  }

  get state$() {
    return this._state$.asObservable();
  }

  updateState(newValue: State) {
    this._state$.next(JSON.parse(JSON.stringify(newValue)));
  }
}

export class State {
  product: string;
  gamesCategory: string;
  constructor() {
    this.product = 'cappuccino';
    this.gamesCategory = 'foryou';
  }
}
