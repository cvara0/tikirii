import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.models';
import { Product } from 'src/app/models/product.models';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  productList:Product[];
  productListByCategory:Product[];
  productListByIdAndCategory:Product[];

  productId:number=1;
 
  @Input() category!:Category;

  listStyle    : string='hideContent';
  fadeStyle1    : string='fadeIn';
  fadeStyle2    : string='fadeIn';
  isShow       : boolean=false;

  showMore:string='ver mas...';

  constructor(public productService:ProductService, public categoryService:CategoryService ) { 
    this.productList=productService.getProductList();
   this.productListByCategory=[];
   this.productListByIdAndCategory=[];
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.productListByCategory=this.productService.getProductListByCategory(this.category.id);
    //this.productList=this.productService.getProductListByIdAndCategory(this.productId,this.category.id);
    this.showDetail(this.productId,this.category.id);
  }

  show(categoryId:number){
    this.productListByCategory=this.productService.getProductListByCategory(this.category.id);
   
    this.showMore='ver menos...'
    this.fadeStyle1 ='fadeIn';
    this.fadeStyle2 ='fadeIn';
    if(!this.isShow){
      this.listStyle="showContent";
      this.isShow=!this.isShow;
    }
    else
      this.hide();
  }

  hide(){
    this.showMore='ver mas...'
    this.isShow=!this.isShow;
    this.fadeStyle1 ='fadeOut';
    this.fadeStyle2 ='fadeOut';
    setTimeout(() => {this.listStyle="hideContent";}, 500);
  }

  showDetail(productId:number,categoryId:number){
    this.productId=productId;
    this.productList=this.productService.getProductListByIdAndCategory(productId,categoryId);
  
  }

}
