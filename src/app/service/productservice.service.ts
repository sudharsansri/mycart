import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}
  private cartData1: any[] = [];

  getProducts(): Observable<any[]> {
    
  const apiUrl = 'https://e-commerce-backend-f8v8.onrender.com/products';
    return this.http.get<any[]>(apiUrl);
  }

  @Output() cartData:EventEmitter<any> = new EventEmitter<any>(); 
  addData(value:any){
    if(value){
      this.cartData1.push(value);
      this.cartData.emit(this.cartData1)
      console.log(value)
    }
   
  }
}