import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IconModule, IconSetService } from '@coreui/icons-angular';

import { CardModule, GridModule } from '@coreui/angular';
import { ExperienceListComponent } from './components/experience-list/experience-list.component';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ExperienceListComponent,
    ButtonComponent
  ],
  exports: [
    NavbarComponent,
    ExperienceListComponent,
    ButtonComponent
  ],
  providers: [
    IconSetService
  ],
  imports: [
    CommonModule,
    GridModule,
    IconModule,
    CardModule
  ]
})
export class SharedModule { }
