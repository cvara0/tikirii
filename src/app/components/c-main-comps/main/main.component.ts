import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
images:any[]=[];
  constructor() { 

    this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }

  ngOnInit(): void {
  }

}
