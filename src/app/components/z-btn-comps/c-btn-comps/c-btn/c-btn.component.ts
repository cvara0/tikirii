import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.models';

@Component({
  selector: 'app-c-btn',
  templateUrl: './c-btn.component.html',
  styleUrls: ['./c-btn.component.css']
})
export class CBtnComponent implements OnInit {

  @Input() productToShow  : Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
