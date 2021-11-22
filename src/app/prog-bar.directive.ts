import { Directive, HostBinding, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[progBar]'
})
export class ProgBarDirective implements OnInit, OnChanges {

@Input() color: string = 'transparent';
@Input() value: number = 0;
@HostBinding('style.backgroundColor') barColor: string = this.color;
@HostBinding('style.width') barValue: string = this.value + "%";
  
  constructor(private render: Renderer2) { }

  ngOnInit(){
    this.barColor = this.color;
    this.barValue = this.value + "%";
  }

  ngOnChanges(){
    this.barValue = this.value + "%"; 
  }

}
