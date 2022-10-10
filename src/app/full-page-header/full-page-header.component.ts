import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-full-page-header',
  templateUrl: './full-page-header.component.html',
  styleUrls: ['./full-page-header.component.scss'],
})
export class FullPageHeaderComponent implements AfterViewInit {
  // eslint-disable-next-line
  constructor() {}

  @ViewChild('headshot') chidlHeadshot: ElementRef;

  @ViewChild('h1') childH1: ElementRef;

  @ViewChild('h2') childH2: ElementRef;

  ngAfterViewInit() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 1, opacity: 1, y: 0 } });
    const headshot: Element = this.chidlHeadshot.nativeElement;
    const h1: Element = this.childH1.nativeElement;
    const h2: Element = this.childH2.nativeElement;

    tl.to(headshot, {});
    tl.to(h1, { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', scale: 1.25 }, '-=1');
    tl.to(h2, { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' }, '-=1');
  }
}
