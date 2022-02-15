import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../../shared/server.service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss'],
})
export class RecentBooksComponent implements OnInit {
  bookData: any;

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    this.serverService.getBookData().then((data) => {
      this.bookData = data;
    });
  }
}
