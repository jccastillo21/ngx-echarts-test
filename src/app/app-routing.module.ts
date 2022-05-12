import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './components/map/map.component';
import { ChartComponent } from './components/chart/chart.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
