import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'//giving the information  in providers attribute in app.module.ts
})
export class ProductService {

  constructor(public http: HttpClient, private router: Router) { } //DI for HttpClient API

  //Loading product detains from the backend
  loadProductDetails(): Observable<Product[]> {
    return this.http.get<Product[]>("http://batch7.us-east-1.elasticbeanstalk.com/product/getAllProduct")
  }

  storeProductDetails(product: Product): Observable<string> {
    return this.http.post("http://batch7.us-east-1.elasticbeanstalk.com/product/storeProduct", product, { responseType: 'text' })
  }

  deleteProductDetails(pid: number): Observable<string> {
    return this.http.delete("http://batch7.us-east-1.elasticbeanstalk.com/deleteProduct/" + pid, { responseType: 'text' });
  }

  updateProductInfo(product: any): Observable<string> {
    return this.http.patch("http://batch7.us-east-1.elasticbeanstalk.com/updateProduct", product, { responseType: 'text' })
  }

  loggedIn() {
    console.log(localStorage.getItem);
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
}
