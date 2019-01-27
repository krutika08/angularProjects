import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[only-digits]'
})
export class OnlyDigitsDirective {
  constructor(public e1 : ElementRef){
    this.e1.nativeElement.onkeypress = (evnt) => {
        if(!(evnt.which >= 48 && evnt.which <= 57)){
            evnt.preventDefault();
        }
    };
}

}
