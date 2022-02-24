import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product, products } from 'src/app/products';
import { CartItemType } from '../cart-service/cart.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private ordersUrl = 'api/orders';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  saveOrder(order: CartItemType[]): Observable<CartItemType[]> {
    return this.http.post<CartItemType[]>(this.ordersUrl, order, this.httpOptions);
  }
}
