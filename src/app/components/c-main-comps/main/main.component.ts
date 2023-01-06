import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models/category.models';
import { Product } from 'src/app/models/product.models';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  productListByCategory:Product[];
 
  productId:number=1;
 
  @Input() category!:Category;

  listStyle    : string='hideContent';
  fadeStyle1    : string='fadeIn';
  fadeStyle2    : string='fadeIn';
  isShow       : boolean=false;

  showMore:string='ver mas...';
  closeResult: string='';

  constructor(public productService:ProductService,private modalService: NgbModal ) { 
   this.productListByCategory=[];
 
  }

  ngOnInit(): void {
    
  }

  ngAfterContentChecked(): void {
    this.productListByCategory=this.productService.getProductListByCategory(this.category.id);
  }

  
  

  open(content:any) {
    this.modalService.open(content, {
        ariaLabelledBy: 'modal-basic-title',
        centered:true,
        size:'lg'
        //size:'lg xl sm',
      // windowClass:'ngb-modal-style'
        
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
