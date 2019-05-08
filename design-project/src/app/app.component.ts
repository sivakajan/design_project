import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'design-project';
  clo=false;
  ope=false;

  drop()
  {
    this.clo=!this.clo;
  }
  pop(){
    this.ope=!this.ope;
  }
}
