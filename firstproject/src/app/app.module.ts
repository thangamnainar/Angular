import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentPageComponent } from './component-page/component-page.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ComponentInteractionsComponent } from './component-interactions/component-interactions.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentPageComponent,
    DatabindingComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent,
    ComponentInteractionsComponent,
    TestComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
