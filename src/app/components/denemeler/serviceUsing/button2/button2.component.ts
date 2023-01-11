import { Component, OnInit } from '@angular/core';
import { ButtonService } from '../services/button.service';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.css']
})
export class Button2Component implements OnInit {


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
