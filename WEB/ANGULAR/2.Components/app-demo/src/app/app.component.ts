import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 1;

//   users = [
//   {
//     name: 'John',
//     age: 34
//   },
//   {
//     name: 'Peter',
//     age: 35
//   },
//   {
//     name: 'George',
//     age: 36
//   },
// ];


//   buttonClickHandler():void{
// this.title++;

 // }

 showText= true;
 toggleText():void{
this.showText = !this.showText;
 }
}
