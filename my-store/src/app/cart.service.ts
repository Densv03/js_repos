import { Injectable } from '@angular/core';
import { Product } from "./products";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  addToCart(product: Product): void {
    this.items.push(product)
  }
  getItems(): any {
    return this.items;
  }
  clearCart(): any {
    this.items = [];
    return this.items;
  }
  constructor() { }
}
