import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';

const routes: Routes = [
  {
    path:'Home',component:HomeComponent 
  },
  {
    path:'Home2',component:Home2Component 
  },
  {
    path:'Home3',component:Home3Component 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
