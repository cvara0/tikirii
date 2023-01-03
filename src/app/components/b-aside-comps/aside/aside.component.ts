import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.models';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  categoryList :  Category[];
  productList    :  Product[]=[];
  categoryId:number=0;
  constructor() {
    this.categoryList=[
      new Category(0,'BAULES','cian-btn'),
      new Category(1,'CAJAS','orange-btn'),
      new Category(2,'CAMAS','green-btn'),
      new Category(3,'ESCRITORIOS','cian-btn'),
      new Category(4,'JUEGOS DIDACTICOS','pink-btn'),
      new Category(5,'MESAS Y SILLAS','blue-btn'),
      new Category(6,'ORGANIZADORES','cian-btn')
  ];
   }

  ngOnInit(): void {
  }

  showImages(categoryId:number){
    

    this.categoryId=categoryId;
   
  }

}
