import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { ThankDialogComponent } from './thank-dialog/thank-dialog.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    ThankDialogComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule
  ]
})
export class CheckoutModule { }
