import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss'],
})
export class RecentBooksComponent implements OnInit {
  @Input() recentBooks: any[];

  constructor() {}

  ngOnInit(): void {}
}
