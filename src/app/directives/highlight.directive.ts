import { Directive, ElementRef, OnChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{

  constructor(private e: ElementRef) { }

  @HostListener("window:keyup") ngOnChanges() {

    let count = this.e.nativeElement.value.length
    
    if(count < 7) {
        this.e.nativeElement.style.backgroundColor = 'pink'
    } else {
        this.e.nativeElement.style.backgroundColor = 'purple'
    }
  }

}
