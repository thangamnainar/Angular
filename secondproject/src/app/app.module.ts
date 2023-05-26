import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { ServiceComponent } from './service/service.component';
import { LearnserviceComponent } from './learnservice/learnservice.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { GetusersComponent } from './getusers/getusers.component';

@NgModule({
  declarations: [
    AppComponent,
    MyappComponent,
    LifeCycleHooksComponent,
    ServiceComponent,
    LearnserviceComponent,
    GetusersComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
