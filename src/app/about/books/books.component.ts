import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: any[];

  recentBooks: any[];

  pagesRead: {};

  topBooksList: {};

  pastYear = ' <small class="ml-1">PAST YEAR</small>';

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.serverService.getBookData().then((bookData) => {
      this.processBookData(bookData);
    });
  }

  // TODO: Move this logic SS?
  processBookData(data) {
    if (!data) {
      return console.log('No books data!');
    }

    const yearAgo = new Date();
    yearAgo.setDate(yearAgo.getDate() - 365);

    const booksData = data.booksRead;
    const recentBooksArr = [];

    if (!booksData) {
      return console.log('No books read data');
    }

    let pagesRead = 0;
    const topBooks: string[] = [];
    for (let i = 0; i < booksData.length; i += 1) {
      const book = booksData[i];

      // Show top 6 books, ordered from recently read
      if (topBooks.length < 6 && book.rating === 5) {
        topBooks.push(book.title);
      }

      const dateRead = book.dateRead && new Date(book.dateRead);

      if (dateRead && dateRead > yearAgo) {
        recentBooksArr.push(book);

        if (book.pages) {
          pagesRead += parseInt(book.pages, 10);
        }
      }
    }

    /*
      Since dateRead only applies to the first time a book is read, we need to instead
      rely on the booksData coming in order of most recent read date
    */
    const recentBookCount = booksData.length > 6 ? 6 : booksData.length;
    this.recentBooks = booksData.slice(0, recentBookCount);

    this.books = recentBooksArr;
    this.pagesRead = pagesRead;
    let topBooksList = '';

    for (let j = 0; j < topBooks.length; j += 1) {
      if (j % 2) {
        topBooksList += `<b>${topBooks[j]}. </b>`;
      } else {
        topBooksList += `${topBooks[j]}. `;
      }
    }

    this.topBooksList = topBooksList;

    return null;
  }
}
