import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { ServerService } from '../../server.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class BooksComponent implements OnInit {
  books: {};
  pagesRead: {};
  topBooksList: {};

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {

    this.serverService.getBookData().then(bookData => {
      this.processBookData(bookData);
    });
  }

  processBookData(data) {
    if(!data) return console.log("No books data!");
    var books = data.booksRead;
    if(!books) return console.log("No books read data");
    this.books = books;

    var pagesRead = 0;
    for(let i=0; i < books.length; i++){
      if(books[i].pages) pagesRead += parseInt(books[i].pages);
    }
    this.pagesRead = pagesRead;

    var topBooks = data.topBooks;
    var topBooksList = '';
    for(let j=0; j < topBooks.length; j++){
      if(j%2) {
        topBooksList += '<b>' + topBooks[j].title + '. </b>';
      } else {
        topBooksList += topBooks[j].title + '. ';
      }
    }
    this.topBooksList = topBooksList;
  }

}
