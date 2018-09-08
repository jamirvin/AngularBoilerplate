import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AngularBoilerplate';

    books = {};

    constructor(public data: DataService) {
        data.getBooks().subscribe(books => {
            this.books = books;
        });
    }

}
