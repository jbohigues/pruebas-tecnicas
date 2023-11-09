import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-availablebooks',
  templateUrl: './availablebooks.component.html',
  styleUrls: ['./availablebooks.component.scss'],
})
export class AvailablebooksComponent {
  library: Book[] = [];
  bookList: string[] = [];
  constructor(private http: HttpClient) {
    this.http.get<Book[]>('assets/json/library.json').subscribe((data: any) => {
      this.library = data.library;
      console.log(this.library);
      this.bookList =
        JSON.parse(String(localStorage.getItem('bookList'))) != null
          ? JSON.parse(String(localStorage.getItem('bookList')))
          : [];
      console.log(this.bookList);

      if (this.bookList != null) {
        this.bookList.forEach((bookOfList: string) => {
          this.library = this.library.filter(
            (book) => book.book.ISBN != bookOfList
          );
        });
      }
    });
  }

  saveBook(ISBN: string) {
    this.bookList.push(ISBN);
    localStorage.setItem('bookList', JSON.stringify(this.bookList));
    this.library = this.library.filter((book) => book.book.ISBN != ISBN);
  }
}
