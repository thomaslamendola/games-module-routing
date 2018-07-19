import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'cappuccino', loadChildren: './casino/casino.module#CasinoModule' },
  { path: 'legos', loadChildren: './vegas/vegas.module#VegasModule'  },
  { path: '',
    redirectTo: '/cappuccino',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
