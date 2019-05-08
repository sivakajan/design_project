import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advat',
  templateUrl: './advat.component.html',
  styleUrls: ['./advat.component.css']
})
export class AdvatComponent implements OnInit {

  constructor() { }
  nol=['assets/image/ww.jpg','assets/image/ww.jpg','assets/image/aa.jpg','assets/image/aa.jpg'];

  ngOnInit() {
  }
  rotate = true;
  maxSize = 5;
}
