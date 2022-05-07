import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../shared/server.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  bookData: any;

  pastYear = ' <small class="ml-1">PAST YEAR</small>';

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.serverService.getBookData().then((data) => {
      this.bookData = data;
    });
  }
}
