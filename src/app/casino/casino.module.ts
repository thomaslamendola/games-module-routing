import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasinoRoutingModule } from './casino-routing.module';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [
    CommonModule,
    CasinoRoutingModule
  ],
  declarations: [RootComponent],
  exports: [RootComponent]
})
export class CasinoModule { }
