import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class TextosService {
    constructor() { }
    changeTextToUppercase(form: FormGroup, field: string) {
        const tempVal = form.get(field)?.value;
        //console.log(tempVal.toUpperCase()) ;
        form.get(field)?.setValue(tempVal.toUpperCase());
        //console.log(field);
        //this.miFormulario.patchValue(obj);
    }

    generateId(longuitud: number) {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < longuitud; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

}
