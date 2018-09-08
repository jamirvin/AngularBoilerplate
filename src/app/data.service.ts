import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private readonly BASE_API = '/api';
    private readonly BOOKS_ENDPOINT = '/books';

    constructor(private http: HttpClient) { }

    getBooks() {
        return this.http.get(this.BASE_API + this.BOOKS_ENDPOINT);
    }
}
