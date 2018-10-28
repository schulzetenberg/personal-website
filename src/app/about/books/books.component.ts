import { Component, OnInit } from '@angular/core';

import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: [
    './books.component.scss',
    './books.scss',
  ],
})
export class BooksComponent implements OnInit {
  books: any[];
  recentBooks: any[];
  pagesRead: {};
  topBooksList: {};

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    const now = new Date();
    const yearAgo = new Date();
    yearAgo.setDate(yearAgo.getDate() - 365);

    this.serverService.getBookData(yearAgo, now).then((bookData) => {
      this.processBookData(bookData);
    });
  }

  processBookData(data) {
    if (!data) {
      return console.log('No books data!');
    }

    const booksData = data.booksRead;
    this.books = booksData;
    const recentBookCount = booksData.length > 6 ? 6 : booksData.length;
    this.recentBooks = booksData.slice(0, recentBookCount);

    if (!booksData) {
      return console.log('No books read data');
    }

    let pagesRead = 0;
    for (let i = 0; i < booksData.length; i += 1) {
      if (booksData[i].pages) {
        pagesRead += parseInt(booksData[i].pages, 10);
      }
    }

    this.pagesRead = pagesRead;
    const topBooks = data.topBooks;
    let topBooksList = '';

    for (let j = 0; j < topBooks.length; j += 1) {
      if (j % 2) {
        topBooksList += '<b>' + topBooks[j].title + '. </b>';
      } else {
        topBooksList += topBooks[j].title + '. ';
      }
    }

    this.topBooksList = topBooksList;
  }

}
