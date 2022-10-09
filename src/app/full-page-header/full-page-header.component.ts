import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-full-page-header',
  templateUrl: './full-page-header.component.html',
  styleUrls: ['./full-page-header.component.scss'],
})
export class FullPageHeaderComponent implements OnInit {
  // eslint-disable-next-line
  constructor() {}

  // eslint-disable-next-line
  ngOnInit() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 1, opacity: 1, y: 0 } });
    tl.to('#headshot', {});
    tl.to('h1', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', scale: 1.25 }, '-=1');
    tl.to('h2', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' }, '-=1');
  }
}
