import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

productList:Product[];
 
  @Input() categoryId!:number;

  listStyle    : string='hideContent';
  fadeStyle1    : string='animate__fadeInLeftBig';
  fadeStyle2    : string='animate__fadeInRightBig';
  isShow       : boolean=false;

  constructor() { 
    this.productList=[
      new Product(
        0,
          [
            'assets/img/baules/baul_1_img.png',
            'assets/img/baules/baul_2_img.png',
            'assets/img/baules/baul_3_img.png',
            'assets/img/baules/baul_4_img.png'
          ],
        []
      ),
      new Product(
        1,
          [
            'assets/img/cajas/caja_1_img.png',
            'assets/img/cajas/caja_2_img.png',
            'assets/img/cajas/caja_3_img.png',
            'assets/img/cajas/caja_4_img.png'
          ],
        []
      ),
      new Product(
        2,
          [
            'assets/img/camas/cama_1_img.png',
            'assets/img/camas/cama_2_img.png',
            'assets/img/camas/cama_3_img.png',
            'assets/img/camas/cama_4_img.png'
          ],
        []
      ),
      new Product(
        3,
          [
            'assets/img/escritorios/escritorio_1_img.png',
            'assets/img/escritorios/escritorio_2_img.png',
            'assets/img/escritorios/escritorio_3_img.png'
          ],
        []
      ),
      new Product(
        4,
          [
            'assets/img/juegos_didacticos/juego_1_img.png',
            'assets/img/juegos_didacticos/juego_2_img.png',
            'assets/img/juegos_didacticos/juego_3_img.png',
            'assets/img/juegos_didacticos/juego_4_img.png'
          ],
        []
      ),
      new Product(
        5,
          [
            'assets/img/mesas_sillas/mesa_silla_1.png',
            'assets/img/mesas_sillas/mesa_silla_2.png',
            'assets/img/mesas_sillas/mesa_silla_3.png',
            'assets/img/mesas_sillas/mesa_silla_4.png'
          ],
        []
      ),
      new Product(
        6,
          [
            'assets/img/mueble_organizador/organizador_1.png',
            'assets/img/mueble_organizador/organizador_2.png',
            'assets/img/mueble_organizador/organizador_3.png',
            'assets/img/mueble_organizador/organizador_4.png'
          ],
        []
      )
    ];
    
  }

  ngOnInit(): void {
  }

  show(){
    this.fadeStyle1 ='animate__fadeInLeftBig';
    this.fadeStyle2 ='animate__fadeInRightBig';
    if(!this.isShow){
      this.listStyle="showContent";
      this.isShow=!this.isShow;
    }
    else
      this.hide();
  }

  hide(){
    this.isShow=!this.isShow;
    this.fadeStyle1 ='animate__fadeOutLeftBig';
    this.fadeStyle2 ='animate__fadeOutRightBig';
    setTimeout(() => {this.listStyle="hideContent";}, 500);
  }

}
