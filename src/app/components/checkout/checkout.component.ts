import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ThankDialogComponent } from './thank-dialog/thank-dialog.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent {
  public items = this.cartService.getItems();
  public totalCost = this.cartService.getTotalCost();
  private emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/;

  constructor(private cartService: CartService, public thankDialog: MatDialog) { }

  checkoutForm = new FormGroup({
    email: new FormControl('', Validators.pattern(this.emailRegex)),
    confirmEmail: new FormControl('', Validators.required),
    nameSurname: new FormControl('', Validators.pattern("^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{1,}\\s?([a-zA-Z]{1,})?)"))
  }, { validators: this.validateConfirmEmail });

  private validateConfirmEmail(ac: AbstractControl): Validators | null {
    if (ac.value['email'] === ac.value['confirmEmail']) {
      ac.get('confirmEmail')?.setErrors(null);
    }
    else {
      ac.get('confirmEmail')?.setErrors({ 'mismatch': true });
    }
    return null;
  }

  public onSubmit() {
    this.items = this.cartService.clearCart();
    this.thankDialog.open(ThankDialogComponent);
  };

  public hasError(errorKey: string): boolean {
    if (this.checkoutForm.controls['email'].hasError(errorKey) ||
      this.checkoutForm.controls['confirmEmail'].hasError(errorKey) ||
      this.checkoutForm.controls['nameSurname'].hasError(errorKey)) {
        return true;
    } else return false;
  }
}
