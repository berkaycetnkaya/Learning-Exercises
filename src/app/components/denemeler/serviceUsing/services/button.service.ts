import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor() { }


public  counter:number = 0;
  incCounter(){
    this.counter++;
  }

  decCounter(){
    this.counter--;

  }
}
