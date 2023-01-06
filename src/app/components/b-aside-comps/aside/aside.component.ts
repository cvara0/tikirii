import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.models';
import { Product } from 'src/app/models/product.models';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  categoryList :  Category[];
  randomProductImgList :  string[]=[];
  category!:Category;



  constructor(categoryService:CategoryService,productService:ProductService) {
    this.categoryList=categoryService.getCategoryList();
    //filtrar imagenes
   
   }

  ngOnInit(): void {
  }

  showImages(category:Category){
    
    
    this.category=category;
    window.scrollBy(0,1000-1000*(this.category.id/this.categoryList.length));
   
  }

}
