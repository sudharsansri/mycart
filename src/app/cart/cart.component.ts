import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/productservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products:any[]=[]
  constructor(private product:ProductService){}
  
    ngOnInit() {
      const new1:any=localStorage.getItem("newlist")
      if(new1!==null){
        this.products.push(JSON.parse(new1))
      }
    
      console.log(new1,'jdh')
      console.log(this.products,'jdjj')
    //  this.addData()
    }
    addData(){
      console.log(this.products,'1')
      console.log('Component initialized');
      this.product.cartData.subscribe((data)=>{
        
       this.products=data
       console.log(this.products,"hd")
      })
      
    }
  

}
