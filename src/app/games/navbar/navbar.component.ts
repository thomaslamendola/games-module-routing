import { Component, OnInit } from '@angular/core';
import { DataService, State } from '../../core/data.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-games-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public state$: Subscription;
  public state: State;

  public items: Array<IGamesCategoryItem> = new Array<IGamesCategoryItem>();

  constructor(private dataService: DataService) { 
    this.state$ = this.dataService.state$.subscribe(
      state$ => {
        this.state = state$
      }
    );
    this.items.push({key: 'foryou', label: 'For You'});
    this.items.push({key: 'sloths', label: 'Sloths'});
  }

  updateCategory(newValue: string) {
    this.state.gamesCategory = newValue;
    this.dataService.updateState(this.state);
  }

  ngOnInit() {
  }
}

export interface IGamesCategoryItem {
  key: string;
  label: string;
}