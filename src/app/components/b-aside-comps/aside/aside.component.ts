import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.models';
import { Product } from 'src/app/models/product.models';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  categoryList :  Category[];
  productList    :  Product[]=[];
  category!:Category;

  constructor(categoryService:CategoryService) {
    this.categoryList=categoryService.getCategoryList();
   }

  ngOnInit(): void {
  }

  showImages(category:Category){
    

    this.category=category;
   
  }

}
