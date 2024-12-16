import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { ConfigComponent } from './config/config.component';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    ConfigComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
