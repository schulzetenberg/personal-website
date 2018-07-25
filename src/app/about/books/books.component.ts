import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { ServerService } from '../../server.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: [
    './books.component.scss',
    './books.scss',
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BooksComponent implements OnInit {
  books: any[];
  pagesRead: {};
  topBooksList: {};

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {

    this.serverService.getBookData().then((bookData) => {
      this.processBookData(bookData);
    });
  }

  processBookData(data) {
    if (!data) {
      return console.log('No books data!');
    }

    const booksData = data.booksRead;
    this.books = booksData;

    if (!booksData) {
      return console.log('No books read data');
    }

    let pagesRead = 0;
    for (let i = 0; i < booksData.length; i++) {
      if (booksData[i].pages) {
        pagesRead += parseInt(booksData[i].pages, 10);
      }
    }

    this.pagesRead = pagesRead;
    const topBooks = data.topBooks;
    let topBooksList = '';

    for (let j = 0; j < topBooks.length; j++) {
      if (j % 2) {
        topBooksList += '<b>' + topBooks[j].title + '. </b>';
      } else {
        topBooksList += topBooks[j].title + '. ';
      }
    }

    this.topBooksList = topBooksList;
  }

}
