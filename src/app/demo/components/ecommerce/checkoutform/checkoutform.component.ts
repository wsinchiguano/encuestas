import { Component } from '@angular/core';

@Component({
    templateUrl: './checkoutform.component.html',
})
export class CheckoutFormComponent {

    quantities: number[] = [1, 1, 1];

    value: string = '';

    checked: boolean = true;

    checked2: boolean = true;

    countries = [
        {name: 'Australia', code: 'AU'},
        {name: 'Brazil', code: 'BR'},
        {name: 'China', code: 'CN'},
        {name: 'Egypt', code: 'EG'},
        {name: 'France', code: 'FR'},
        {name: 'Germany', code: 'DE'},
        {name: 'India', code: 'IN'},
        {name: 'Japan', code: 'JP'},
        {name: 'Spain', code: 'ES'},
        {name: 'United States', code: 'US'}
    ];

    selectedCountry: string = '';

}
