import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-album-art',
  templateUrl: './album-art.component.html',
  styleUrls: ['./album-art.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AlbumArtComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
