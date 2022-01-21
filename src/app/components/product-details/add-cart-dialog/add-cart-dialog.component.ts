import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-cart-dialog',
  templateUrl: './add-cart-dialog.component.html',
  styleUrls: ['./add-cart-dialog.component.less']
})
export class AddCartDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddCartDialogComponent>) { }

  public closeDialog(): void {
    this.dialogRef.close();
  }

}
