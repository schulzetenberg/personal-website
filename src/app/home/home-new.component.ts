import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home-new.component.scss',
    './bootswatch.css',
  ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.aolLoading();
  }

  aolLoading() {
    const img1 = document.getElementById('loadingImg1');
    const img2 = document.getElementById('loadingImg2');
    const img3 = document.getElementById('loadingImg3');
    const loadingDiv = document.getElementById('divLoading');

    const loadingFirst = Math.floor(Math.random() * 1500) + 100; // 100 to 1600 ms
    const loadingSecond = Math.floor(Math.random() * 2400) + 200; // 200 to 2600 ms

    setTimeout(() => show2ndImg(), loadingFirst);

    function show2ndImg() {
      img1.style.display = 'none';
      img2.style.display = '';
      setTimeout(() => show3rdImg(), loadingFirst);
    }

    function show3rdImg() {
      img2.style.display = 'none';
      img3.style.display = '';
      setTimeout(() => removeLoading(), 1000);
    }

    function removeLoading() {
      loadingDiv.style.display = 'none';
    }
  }

}
