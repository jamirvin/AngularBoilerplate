import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private readonly BASE_API = '/api';
    private readonly BOOKS_ENDPOINT = this.BASE_API + '/books';

    private jsonOptions = {
        headers: new HttpHeaders({
            'Content-type': 'application/json',
        })
    };

    constructor(private http: HttpClient) { }

    getBooks() {
        return this.http.get(this.BOOKS_ENDPOINT);
    }

    addBook(title: string, author: string) {
        return this.http.post(this.BOOKS_ENDPOINT, { book_title: title, author_name: author }, this.jsonOptions);
    }
}
