import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentPageComponent } from './component-page/component-page.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ComponentInteractionsComponent } from './component-interactions/component-interactions.component';

const routes: Routes = [
 {
    path:'componentPage',component:ComponentPageComponent
  },
  {
    path:'databindingPage',component:DatabindingComponent 
  },
  {
    path:'directivesPage',component:DirectivesComponent 
  },
  {
    path:'componentInteractions',component:ComponentInteractionsComponent
  },
  {
    path:'parentComponent',component:ParentComponent
  },
  {
    path:'childComponent',component:ChildComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
