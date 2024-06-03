import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  @Input('title')titleFromApp:string = '';
  title: string = 'hide';
  toggle: boolean = false;


// life cycle hooks
  ngOnInit(): void {
  console.log('Navigation Component initialized');
  
}

ngOnDestroy(): void {
  console.log('Navigation Component destroyed');
  
}

  isActive: boolean = false;
  inputValue: string = 'Hello';
  activeUsers = [
    { name: 'Pesho', age: 20 },
    { name: 'Gosho', age: 21 },
    { name: 'Tosho', age: 22 },
  ];
  handleClick(): void {
    //console.log('Clicked');
    // this.toggle = !this.toggle;
    this.isActive = !this.isActive;
  }
}
