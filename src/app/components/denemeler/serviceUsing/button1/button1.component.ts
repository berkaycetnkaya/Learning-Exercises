import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css']
})
export class Button1Component implements OnInit {
 
 
 constructor(public counter:ButtonService) {
  

 }
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  increase(){
this.counter.incCounter();
  }
  decrease(){
    this.counter.decCounter();
  }
}
