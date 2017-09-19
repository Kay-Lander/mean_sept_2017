import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  colorArr = [];

  incolorArr(){
    for(let k = 0; k<10; k++){
      const random = (Math.floor(Math.random() * 6)) + 1;
      if(random === 1) {
        this.colorArr.push('Lime')
      } else if(random === 2) {
        this.colorArr.push('Fuchisa')
      } else if(random === 3) {
        this.colorArr.push('Gray')
      } else if(random === 4) {
        this.colorArr.push('Yellow')
      } else if(random === 5) {
        this.colorArr.push('Red')
      } else if(random === 6) {
        this.colorArr.push('Blue')
      } else if(random === 7) {
        this.colorArr.push('Orange')
      }
    }
  }
  ngOnInit(){
    this.incolorArr();
  }
}
