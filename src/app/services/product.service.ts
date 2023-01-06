import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private productList:Product[];

  constructor() { 

    this.productList=[
      new Product(
        0,
        0,
          [
            'assets/img/baules/baul_1_img.png',
            'assets/img/cajas/caja_1_img.png',
            'assets/img/camas/cama_1_img.png',
            'assets/img/escritorios/escritorio_1_img.png'
          ],
        []
      ),
      new Product(
        1,
        1,
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
        2,
          [
            'assets/img/cajas/caja_11_img.png',
            'assets/img/cajas/caja_2_img.png',
            'assets/img/cajas/caja_3_img.png',
            'assets/img/cajas/caja_4_img.png'
          ],
        []
      ),
      new Product(
        1,
        3,
          [
            'assets/img/camas/cama_1_img.png',
            'assets/img/camas/cama_2_img.png',
            'assets/img/camas/cama_3_img.png',
            'assets/img/camas/cama_4_img.png'
          ],
        []
      ),
      new Product(
        1,
        4,
          [
            'assets/img/escritorios/escritorio_1_img.png',
            'assets/img/escritorios/escritorio_2_img.png',
            'assets/img/escritorios/escritorio_3_img.png'
          ],
        []
      ),
      new Product(
        1,
        5,
          [
            'assets/img/juegos_didacticos/juego_1_img.png',
            'assets/img/juegos_didacticos/juego_2_img.png',
            'assets/img/juegos_didacticos/juego_3_img.png',
            'assets/img/juegos_didacticos/juego_4_img.png'
          ],
        []
      ),
      new Product(
        1,
        6,
          [
            'assets/img/mesas_sillas/mesa_silla_1.png',
            'assets/img/mesas_sillas/mesa_silla_2.png',
            'assets/img/mesas_sillas/mesa_silla_3.png',
            'assets/img/mesas_sillas/mesa_silla_4.png'
          ],
        []
      ),
      new Product(
        1,
        7,
          [
            'assets/img/mueble_organizador/organizador_1.png',
            'assets/img/mueble_organizador/organizador_2.png',
            'assets/img/mueble_organizador/organizador_3.png',
            'assets/img/mueble_organizador/organizador_4.png'
          ],
        []
      ),
      new Product(
        2,
        1,
          [
            'assets/img/mueble_organizador/organizador_1.png',
            'assets/img/mueble_organizador/organizador_2.png',
            'assets/img/mueble_organizador/organizador_3.png',
            'assets/img/mueble_organizador/organizador_4.png',
            'assets/img/mueble_organizador/organizador_4.png'
          ],
        []
      )
    ,
    new Product(
      2,
      2,
        [
          'assets/img/mueble_organizador/organizador_1.png',
          'assets/img/mueble_organizador/organizador_2.png',
          'assets/img/mueble_organizador/organizador_3.png',
          'assets/img/mueble_organizador/organizador_4.png',
          'assets/img/mueble_organizador/organizador_4.png',
          'assets/img/mueble_organizador/organizador_4.png',
          'assets/img/mueble_organizador/organizador_4.png'
        ],
      []
    ),
    new Product(
      2,
      3,
        [
          'assets/img/mueble_organizador/organizador_1.png',
          'assets/img/mueble_organizador/organizador_2.png',
          'assets/img/mueble_organizador/organizador_3.png',
          'assets/img/mueble_organizador/organizador_4.png',
          'assets/img/mueble_organizador/organizador_4.png',
          'assets/img/mueble_organizador/organizador_4.png',
          'assets/img/mueble_organizador/organizador_4.png'
        ],
      []
    ),
    new Product(
      3,
      2,
        [
          'assets/img/mueble_organizador/organizador_1.png',
          'assets/img/mueble_organizador/organizador_2.png',
          'assets/img/mueble_organizador/organizador_3.png'
        ],
      []
    ),
    new Product(
      4,
      2,
        [
          'assets/img/mueble_organizador/organizador_1.png',
          'assets/img/mueble_organizador/organizador_2.png',
          'assets/img/mueble_organizador/organizador_3.png'
        ],
      []
    ),
    new Product(
      5,
      2,
        [
          'assets/img/mueble_organizador/organizador_1.png',
          'assets/img/mueble_organizador/organizador_2.png',
          'assets/img/mueble_organizador/organizador_3.png'
        ],
      []
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
