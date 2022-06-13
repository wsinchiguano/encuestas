import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from 'src/app/api/blog';
import { Comment } from 'src/app/api/comment';

@Injectable()
export class BlogService {

    constructor(private http: HttpClient) { }

    getBlogs() {
        return this.http.get<any>('assets/demo/data/blog.json')
            .toPromise()
            .then(res => res.blogs as Blog[])
            .then(data => data);
    }

    getComments() {
        return this.http.get<any>('assets/demo/data/blog.json')
            .toPromise()
            .then(res => res.comments as Comment[])
            .then(data => data);
    }
}
