import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productStatus:string='Your Cart is Empty...';
  public isdisabled:boolean=true;
  public productCount:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(){
    console.log('clicked !!!')
    alert(`New Product Added to Your Cart...`)
    this.isdisabled=false;
    this.productCount++;
    if(this.productCount === 1){
      this.productStatus =`${this.productCount} Product is Added in Your Cart...`;
    }else{
      this.productStatus=`${this.productCount} Products are Added in Your Cart...`
    }
  }


  removeProduct(){
    alert(`Product Removed From Your Cart...`)
 this.productCount--;
 if(this.productCount < 1){
  this.isdisabled=true;
  this.productStatus=`No Product is in Your Cart...`
 }else{
  this.productStatus=`${this.productCount} products are Remains in Your Cart...`
 }
  }

}
