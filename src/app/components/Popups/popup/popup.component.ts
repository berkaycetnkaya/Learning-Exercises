import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {





  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data.animal+"popup comopınent")

  }





}
