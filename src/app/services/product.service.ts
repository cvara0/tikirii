import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private productList:Product[];

  constructor() { 

    /*
        public id           : number=0,
        public categoryId   : number=0,
        public name         : string='',
        public imgListUrls  : string[]=[]
    */
    this.productList=[
    new Product(
      1,
      1,
      'baul_01',
      [
        'assets/img/baules_01/baul_01/baul_01_1.png',
        'assets/img/baules_01/baul_01/baul_01_2.png',
        'assets/img/baules_01/baul_01/baul_01_3.png',
        'assets/img/baules_01/baul_01/baul_01_4.png',
      ]

    ),
    new Product(
      1,
      2,
      'caja_01',
      [
        'assets/img/cajas_02/caja_01/caja_01_1.png',
        'assets/img/cajas_02/caja_01/caja_01_2.png',
        'assets/img/cajas_02/caja_01/caja_01_3.png',
        'assets/img/cajas_02/caja_01/caja_01_4.png',
      ]

    ),
    new Product(
      2,
      2,
      'caja_02',
      [
        'assets/img/cajas_02/caja_02/caja_02_1.png',
        'assets/img/cajas_02/caja_02/caja_02_2.png'
      ]
    ),
    new Product(
      1,
      3,
      'cama_01',
      [
        'assets/img/camas_03/cama_01/cama_01_1.png',
        'assets/img/camas_03/cama_01/cama_01_2.png',
        'assets/img/camas_03/cama_01/cama_01_3.png',
        'assets/img/camas_03/cama_01/cama_01_4.png',
        'assets/img/camas_03/cama_01/cama_01_5.png'
      ]
    ),
    new Product(
      1,
      4,
      'escritorio_01',
      [
        'assets/img/escritorios_04/escritorio_01/escritorio_01_1.png',
        'assets/img/escritorios_04/escritorio_01/escritorio_01_2.png',
        'assets/img/escritorios_04/escritorio_01/escritorio_01_3.png'
      ]
    ),
    new Product(
      1,
      5,
      'juego_didactico_01',
      [
        'assets/img/juegos_didacticos_05/juego_didactico_01/juego_didactico_01_1.png',
        'assets/img/juegos_didacticos_05/juego_didactico_01/juego_didactico_01_2.png',
        'assets/img/juegos_didacticos_05/juego_didactico_01/juego_didactico_01_3.png'
      ]
    ),
    new Product(
      2,
      5,
      'juego_didactico_02',
      [
        'assets/img/juegos_didacticos_05/juego_didactico_02/juego_didactico_02_1.png',
        'assets/img/juegos_didacticos_05/juego_didactico_02/juego_didactico_02_2.png'
      ]
    ),
    new Product(
      3,
      5,
      'juego_didactico_03',
      [
        'assets/img/juegos_didacticos_05/juego_didactico_03/juego_didactico_03_1.png',
        'assets/img/juegos_didacticos_05/juego_didactico_03/juego_didactico_03_2.png',
        'assets/img/juegos_didacticos_05/juego_didactico_03/juego_didactico_03_3.png',
        'assets/img/juegos_didacticos_05/juego_didactico_03/juego_didactico_03_4.png',
        'assets/img/juegos_didacticos_05/juego_didactico_03/juego_didactico_03_5.png'
      ]
    ),
    new Product(
      4,
      5,
      'juego_didactico_04',
      [
        'assets/img/juegos_didacticos_05/juego_didactico_04/juego_didactico_04_1.png',
        'assets/img/juegos_didacticos_05/juego_didactico_04/juego_didactico_04_2.png',
        'assets/img/juegos_didacticos_05/juego_didactico_04/juego_didactico_04_3.png'
      ]
    ),
    new Product(
      5,
      5,
      'juego_didactico_05',
      [
        'assets/img/juegos_didacticos_05/juego_didactico_05/juego_didactico_05_1.png',
        'assets/img/juegos_didacticos_05/juego_didactico_05/juego_didactico_05_2.png'
      ]
    ),
    new Product(
      6,
      5,
      'juego_didactico_06',
      [
        'assets/img/juegos_didacticos_05/juego_didactico_06/juego_didactico_06_1.png'
      ]
    ),
    new Product(
      1,
      6,
      'mesa_silla_01',
      [
        'assets/img/mesas_sillas_06/mesa_silla_01/mesa_silla_01_1.png',
        'assets/img/mesas_sillas_06/mesa_silla_01/mesa_silla_01_2.png',
        'assets/img/mesas_sillas_06/mesa_silla_01/mesa_silla_01_3.png',
        'assets/img/mesas_sillas_06/mesa_silla_01/mesa_silla_01_4.png',
        'assets/img/mesas_sillas_06/mesa_silla_01/mesa_silla_01_5.png'
      ]
    ),
    new Product(
      2,
      6,
      'mesa_silla_02',
      [
        'assets/img/mesas_sillas_06/mesa_silla_02/mesa_silla_02_1.png',
        'assets/img/mesas_sillas_06/mesa_silla_02/mesa_silla_02_2.png',
        'assets/img/mesas_sillas_06/mesa_silla_02/mesa_silla_02_3.png'
      ]
    ),
    new Product(
      1,
      7,
      'organizador_01',
      [
        'assets/img/organizadores_07/organizador_01/organizador_01_1.png',
        'assets/img/organizadores_07/organizador_01/organizador_01_2.png',
        'assets/img/organizadores_07/organizador_01/organizador_01_3.png',
        'assets/img/organizadores_07/organizador_01/organizador_01_4.png',
        'assets/img/organizadores_07/organizador_01/organizador_01_5.png',
        'assets/img/organizadores_07/organizador_01/organizador_01_6.png'
      ]
    ),
    new Product(
      2,
      7,
      'organizador_02',
      [
        'assets/img/organizadores_07/organizador_02/organizador_02_1.png',
        'assets/img/organizadores_07/organizador_02/organizador_02_2.png'
      ]
    )

  ]
  ;

  }

  getProductList(){
    return this.productList;
  }

  getProductListByCategory(categoryId:number){
    return this.productList.filter(product=>product.categoryId==categoryId);
  }

  getProductListByIdAndCategory(productId:number,categoryId:number){
    return this.productList.filter(product=>product.categoryId==categoryId && product.id==productId);
  }

  getFirstProduct(){
    return this.productList[0];
  }
  
}
