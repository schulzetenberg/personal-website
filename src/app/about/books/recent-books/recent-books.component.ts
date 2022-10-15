import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { gsap } from 'gsap';
// import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { ServerService } from '../../../shared/server.service';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.scss'],
})
export class RecentBooksComponent implements OnInit {
  bookData: any;

  @ViewChildren('book') bookContainers: QueryList<ElementRef>;

  constructor(private serverService: ServerService) {}

  ngOnInit(): void {
    // gsap.registerPlugin(CSSRulePlugin);

    this.serverService.getBookData().then((data) => {
      this.bookData = data;

      setTimeout(() => {
        const bookArr: Element[] = this.bookContainers.map((x) => x.nativeElement);
        const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 0.6 } });
        tl.to(bookArr, { stagger: { each: 0.05 }, opacity: 1 });
      }, 5);
    });
  }
}
