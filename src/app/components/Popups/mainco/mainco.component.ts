import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-mainco',
  templateUrl: './mainco.component.html',
  styleUrls: ['./mainco.component.css']
})
export class MaincoComponent {



  animal: string;
  name: string;
ani:string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {name: this.name, animal: this.animal},

    }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      console.log(result+"bu ani")


    });
  }

}

