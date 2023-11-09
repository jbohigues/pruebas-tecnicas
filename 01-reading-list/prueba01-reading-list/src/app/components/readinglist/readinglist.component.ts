import { Component } from '@angular/core';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-readinglist',
  templateUrl: './readinglist.component.html',
  styleUrls: ['./readinglist.component.scss'],
})
export class ReadinglistComponent {
  bookList: Book[] = [];
}
