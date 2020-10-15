import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cart = new BehaviorSubject<Array<Product>>(null);
  public currentDataCart$ = this.cart.asObservable();

  constructor() {}

  public changeCart(newData: Product): void {
    let listCart = this.cart.getValue();
    if (listCart) {
      const objIndex = listCart.findIndex((obj) => obj.id === newData.id);
      if (objIndex !== -1) {
        listCart[objIndex].quantity += 1;
      } else {
        listCart.push(newData);
      }
    } else {
      listCart = [];
      listCart.push(newData);
    }
    this.cart.next(listCart);
  }

  public removeElementCart(newData: Product): void {
    const listCart = this.cart.getValue();
    const objIndex = listCart.findIndex((obj) => obj.id === newData.id);
    if (objIndex !== -1) {
      listCart[objIndex].quantity = 1;
      listCart.splice(objIndex, 1);
    }
    this.cart.next(listCart);
  }
}
