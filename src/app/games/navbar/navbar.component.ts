import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-games-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public product$: Subscription;
  public product: any;
  
  constructor(private dataService: DataService) { 
    this.product$ = this.dataService.product$.subscribe(
      product$ => {
        this.product = product$
      }
    )
  }

  ngOnInit() {
  }

  
}
