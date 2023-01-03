import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-btn',
  templateUrl: './a-btn.component.html',
  styleUrls: ['./a-btn.component.css']
})
export class ABtnComponent implements OnInit {

@Input() tile:string='';
@Input() inputClass: string='';
  constructor() { }

  ngOnInit(): void {
  }

}
