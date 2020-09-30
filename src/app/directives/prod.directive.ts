import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appProd]'
})
export class ProdDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  @Input('onSale') onSale;
  
  @HostListener('click') onClick() {
    alert('clicked');
  };
  
  

  ngOnInit() {
    if (this.onSale === true) {
      this.elementRef.nativeElement.style.border = '2px solid red';
      this.elementRef.nativeElement.style.borderRadius = '10px';
    }
    // console.log(this.onSale);
    // console.log(this.elementRef);
  }

}
