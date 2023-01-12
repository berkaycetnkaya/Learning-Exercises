import { ChildComponent } from './../child/child.component';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatButton} from '@angular/material/button'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
ngAfterViewInit(): void {
  setTimeout(() => {
    this.child.setData(10);
    this.dec.color="primary"
    this.dec.disabled=true
  }, 0);
}
@ViewChild(ChildComponent) private child:ChildComponent
@ViewChild("dec") private dec:MatButton;


}
