import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  copyrightYear: number;

  constructor() {
    this.copyrightYear = new Date().getFullYear();
  }
}
