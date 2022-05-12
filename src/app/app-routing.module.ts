import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './components/map/map.component';
import { ChartComponent } from './components/chart/chart.component';
import { CustomMapComponent } from './components/custom-map/custom-map.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'custom-map', component: CustomMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
