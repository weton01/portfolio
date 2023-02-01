import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const getHomeModule = () => import('./home/home.module').then(item => item.HomeModule)

const routes: Routes = [{
  path: "", loadChildren: getHomeModule
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
