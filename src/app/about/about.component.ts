import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None, // eslint-disable-line
})
export class AboutComponent implements OnInit {
  @ViewChild('frame') frame: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
