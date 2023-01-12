import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


myclass="success"
  @Input()
  set data (value:number){
    this.data=++value
  }
  get data():number{
    return this._data;
  }




private _data:number;







  constructor() {


  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  datam:number;
  setData(value:number){
    this.datam=value
  }

}
