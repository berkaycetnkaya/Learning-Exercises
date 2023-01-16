import { Bootstrap1Component } from './../bootstrap1/bootstrap1.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-pop',
  templateUrl: './home-pop.component.html',
  styleUrls: ['./home-pop.component.css']
})
export class HomePopComponent {
@ViewChild(Bootstrap1Component)  boot:Bootstrap1Component;

show(){

}
}
