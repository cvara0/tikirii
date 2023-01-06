import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  randomProductImgList :  string[]=[];
  
  constructor(productService:ProductService) {
    productService.getProductList().sort(() => Math.random() - Math.random()).slice(0, 10).forEach(product=>this.randomProductImgList.push(product.imageUrl[0]));
   }

  ngOnInit(): void {
  }
  reload(){
    location.reload();
}

}
