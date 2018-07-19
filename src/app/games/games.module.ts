import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { RootComponent } from './root/root.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GamesListComponent } from './games-list/games-list.component';

@NgModule({
  imports: [
    CommonModule,
    GamesRoutingModule
  ],
  declarations: [RootComponent, NavbarComponent, GamesListComponent],
  exports: [RootComponent]
})
export class GamesModule { }
