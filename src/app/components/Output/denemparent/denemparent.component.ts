import { Component } from '@angular/core';

@Component({
  selector: 'app-denemparent',
  templateUrl: './denemparent.component.html',
  styleUrls: ['./denemparent.component.css']
})
export class DenemparentComponent {



  childData($event:any):void{
console.log($event)
  }
}
