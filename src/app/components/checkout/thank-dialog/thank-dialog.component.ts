import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-thank-dialog',
  templateUrl: './thank-dialog.component.html',
  styleUrls: ['./thank-dialog.component.less']
})
export class ThankDialogComponent {

  constructor(public dialogRef: MatDialogRef<ThankDialogComponent>) { }

  public closeDialog(): void {
    this.dialogRef.close();
  }

}
