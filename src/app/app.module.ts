import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { MapComponent } from './components/map/map.component';
import { ChartComponent } from './components/chart/chart.component';
import { CustomMapComponent } from './components/custom-map/custom-map.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  declarations: [
    AppComponent,
    MapComponent,
    ChartComponent,
    CustomMapComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
