import { Injectable } from '@angular/core';
import { Category } from '../models/category.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryList:Category[];

  constructor() { 

    this.categoryList=[
      new Category(1,'BAULES','cian-btn'),
      new Category(2,'CAJAS','orange-btn'),
      new Category(3,'CAMAS','green-btn'),
      new Category(4,'ESCRITORIOS','cian-btn'),
      new Category(5,'JUEGOS DIDACTICOS','pink-btn'),
      new Category(6,'MESAS Y SILLAS','blue-btn'),
      new Category(7,'ORGANIZADORES','cian-btn')
  ];

  }

  getCategoryList(){
    return this.categoryList;
  }
  getCategoryNameById(id:number){
    return this.categoryList.find(category=>category.id===id);
  }
}
