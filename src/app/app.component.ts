import { Component, OnInit } from '@angular/core';
import { DataService } from './core/data.service';
import { Subscription } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public product$: Subscription;
  public product: any;
  
  constructor(private dataService: DataService) { 
    this.product$ = this.dataService.product$.subscribe(
      product$ => {
        this.product = product$
      }
    )
  }

  updateProduct(newProduct: string) {
    this.dataService.changeProduct(newProduct);
  }

  ngOnInit() {
    
  }
}
