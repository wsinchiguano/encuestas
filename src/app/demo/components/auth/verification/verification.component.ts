import { Component } from '@angular/core';
import { DomHandler } from 'primeng/dom';

@Component({
    templateUrl: './verification.component.html'
})
export class VerificationComponent {

    val1!: number;
    
    val2!: number;
    
    val3!: number;
    
    val4!: number;

    focusOnNext(inputEl) {
        DomHandler.getFocusableElements(inputEl.el.nativeElement)[0].focus();
    }
}
