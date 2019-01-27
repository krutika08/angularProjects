import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector : '[only-alphabets]'
})
export class OnlyAlphabets {
    constructor(public e1 : ElementRef){
        this.e1.nativeElement.onkeypress = (evnt) => {
            if(!((evnt.which >= 97 && evnt.which <= 122) || (evnt.which >=65 && evnt.which <= 90))){
                evnt.preventDefault();
            }
        };
    }
}