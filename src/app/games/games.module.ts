import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootComponent } from './root/root.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GamesListComponent } from './games-list/games-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RootComponent, NavbarComponent, GamesListComponent],
  exports: [RootComponent]
})
export class GamesModule { }
