import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { DenemelerComponent } from './components/denemeler/denemeler.component';
import { Button1Component } from './components/denemeler/serviceUsing/button1/button1.component';
import { Button2Component } from './components/denemeler/serviceUsing/button2/button2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OutputComponent } from './components/Output/output/output.component';
import { DenemparentComponent } from './components/Output/denemparent/denemparent.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DenemelerComponent,
    Button1Component,
    Button2Component,
    OutputComponent,
    DenemparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
