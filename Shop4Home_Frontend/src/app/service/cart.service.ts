import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  grandTotal = 0;

  constructor() { }
  //Getting all the products
  getProducts() {
    return this.productList.asObservable();
  }
  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  // Removing the item from the cart
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.pid === a.pid) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  //Removing all existing products from the cart
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  //Generating the bill
  getTotalPrice() {
    this.grandTotal = 0;
    this.cartItemList.forEach((product: any) => {
      this.grandTotal += (product.quantity * product.price);
    })
    return this.grandTotal;
  }
  //if cart is empty we are adding products into cart
  addtoCart(product: any) {
    let productExists = false
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].productPid === product.pid) {
        this.cartItemList[i].quantity++
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItemList.push({
        productPid: product.pid,
        pname: product.pname,
        url: product.url,
        quantity: 1,
        price: product.price,
        category: product.category
      })
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }
  }
}






