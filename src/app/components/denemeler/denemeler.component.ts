import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-denemeler',
  templateUrl: './denemeler.component.html',
  styleUrls: ['./denemeler.component.css']
})
export class DenemelerComponent {
show = false
bookid=1
id : number = 0;
autherid :number = 0;
param={
  id:1,
  autherid:3


  

}
constructor(private rout:ActivatedRoute) {
  

}
learningM(){
  this.id=this.param.id
  this.autherid=this.param['autherid']

}
}

// query param url dekı filtremelerin değerlerini verir
//https://www.youtube.com/watch?v=IJOlcnP0Pd8&list=PLaFzfwmPR7_J-FShIRdYuLk0rvzJE0mRf&index=36&ab_channel=WebGentle
