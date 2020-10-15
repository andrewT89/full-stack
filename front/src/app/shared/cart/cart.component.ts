import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items: Array<Product>;
  totalPrice = 0;
  totalQuantity = 0;

  constructor(private cartServ: CartService) {}

  ngOnInit(): void {
    this.cartServ.currentDataCart$.subscribe((cart) => {
      if (cart) {
        this.items = cart;
        this.totalQuantity = cart.length;
        this.totalPrice = cart.reduce(
          (sum, current) => sum + current.price * current.quantity,
          0
        );
      }
    });
  }
  public remove(producto: Product): void {
    this.cartServ.removeElementCart(producto);
  }
}
