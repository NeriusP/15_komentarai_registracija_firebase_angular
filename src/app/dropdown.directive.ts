import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  private isOpen: boolean = false;

  constructor(private elRef:ElementRef){

  }

  @HostListener('click') toggle(){

    const ul = this.elRef.nativeElement.querySelector("ul");
    
        if (this.isOpen) {
          console.log("Uždarau");
          ul.classList.remove('show');
        } else {
          ul.classList.add('show');
          console.log("Atidarau");
        }
        this.isOpen=!this.isOpen;
  }

  @HostListener ('mouseleave') leave(){
    const ul = this.elRef.nativeElement.querySelector("ul");
    if(this.isOpen){
      this.isOpen = false;
      ul.classList.remove('show');
    }
  }

}
