import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //randomProductImgList :  string[]=[];
  bannerImgList        : string[];
  constructor(productService:ProductService) {
    //para despues -> productService.getProductList().sort(() => Math.random() - Math.random()).slice(0, 10).forEach(product=>this.randomProductImgList.push(product.imageUrl[0]));
    //colocar iamgenes de portada
this.bannerImgList=[
  'assets/img/banner/tikirii_banner1.png',
  'assets/img/banner/tikirii_banner2.png',
  'assets/img/banner/tikirii_banner3.png',
  'assets/img/banner/tikirii_banner4.png',
  'assets/img/banner/tikirii_banner5.png',
  'assets/img/banner/tikirii_banner6.png',
  'assets/img/banner/tikirii_banner7.png',
  'assets/img/banner/tikirii_banner8.png',
  'assets/img/banner/tikirii_banner9.png',
  'assets/img/banner/tikirii_banner10.png'
];
  }

  ngOnInit(): void {
  }
  reload(){
    location.reload();
}

}
