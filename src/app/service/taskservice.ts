import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../api/task';

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) { }

    getTasks() {
        return this.http.get<any>('assets/demo/data/tasks.json')
            .toPromise()
            .then(res => res.data as Task[])
            .then(data => data);
    }
}
