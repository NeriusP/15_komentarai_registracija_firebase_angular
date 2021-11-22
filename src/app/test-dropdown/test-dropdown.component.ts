import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-dropdown',
  templateUrl: './test-dropdown.component.html',
  styleUrls: ['./test-dropdown.component.css']
})
export class TestDropdownComponent implements OnInit {
atliktaDarbo = 10;
  constructor() { }

  atliktasDarbas(){
    if(this.atliktaDarbo<100){
      this.atliktaDarbo++;
      setTimeout(() => {this.atliktasDarbas()}, 500 );
    }
  }

  ngOnInit(): void {
    this.atliktasDarbas();
  }

 

}
