import { Component, OnInit } from '@angular/core';
import { DataService, State } from './core/data.service';
import { Subscription } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public state$: Subscription;
  public state: State;

  constructor(private dataService: DataService) { 
    this.state$ = this.dataService.state$.subscribe(
      state$ => {
        this.state = state$
      }
    )
  }

  updateProduct(newValue: string) {
    this.state.product = newValue;
    this.dataService.updateState(this.state);
  }

  ngOnInit() {

  }
}
