import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegasRoutingModule } from './vegas-routing.module';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [
    CommonModule,
    VegasRoutingModule
  ],
  declarations: [RootComponent],
  exports: [RootComponent]
})
export class VegasModule { }
