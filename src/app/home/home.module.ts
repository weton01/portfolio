import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './pages/index/index.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
