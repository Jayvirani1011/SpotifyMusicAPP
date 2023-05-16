import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeComponent } from './home.component';
import { MaterialUiModule } from '../material-ui.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    MaterialUiModule
  ]
})
export class HomeModuleModule { }
