import { Component, OnInit } from '@angular/core';
import { DataService, State } from '../../core/data.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  public state$: Subscription;
  public state: State;

  constructor(private dataService: DataService) { 
    this.state$ = this.dataService.state$.subscribe(
      state$ => {
        this.state = state$;
      }
    )
  }

  ngOnInit() {
  }

}
