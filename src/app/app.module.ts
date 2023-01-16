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

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './components/Popups/popup/popup.component';
import { MaincoComponent } from './components/Popups/mainco/mainco.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { Bootstrap1Component } from './popupBootstrap/bootstrap1/bootstrap1.component';
import { HomePopComponent } from './popupBootstrap/home-pop/home-pop.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DenemelerComponent,
    Button1Component,
    Button2Component,
    OutputComponent,
    DenemparentComponent,
    PopupComponent,
    MaincoComponent,
    Bootstrap1Component,
    HomePopComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatButtonModule,
    FormsModule
  ],
  exports:[
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
