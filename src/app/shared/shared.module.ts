import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconModule, IconSetService } from '@coreui/icons-angular';

import { GridModule } from '@coreui/angular';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  providers: [
    IconSetService
  ],
  imports: [
    CommonModule,
    GridModule,
    IconModule
  ]
})
export class SharedModule { }
