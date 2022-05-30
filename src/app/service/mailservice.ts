import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mail } from 'src/app/api/mail';

@Injectable()
export class MailService {

    constructor(private http: HttpClient) { }

    getMails() {
        return this.http.get<any>('assets/demo/data/mail.json')
            .toPromise()
            .then(res => res.data as Mail[])
            .then(data => data);
    }
}
