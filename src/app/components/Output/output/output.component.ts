import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
@Output() myData = new EventEmitter<string>();

btnClick():void{
  console.log("tıklandı")
  this.myData.emit("this text is from child");
}
}
