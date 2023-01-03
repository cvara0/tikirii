import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.models';
import { Image } from 'src/app/models/image.models';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  categoryList :  Category[];
  imageList    :  Image[]=[];

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

  ngOnInit(): void {
  }

  showImages(categoryId:number){
    //this.imageList=
  }

}
