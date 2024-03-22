import { Component } from '@angular/core';
import { ProductService } from '../service/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products: any[]=[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log("new")
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      console.log(products)
    });
  }

  addToCart(product: any): void {
    // Implement add to cart functionality
    console.log('Product added to cart:', product);
    if(product){
      this.productService.addData(product)
    }

    localStorage.setItem('newlist',JSON.stringify(product))
    
  }

}
