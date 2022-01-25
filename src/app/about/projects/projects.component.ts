import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  // eslint-disable-next-line class-methods-use-this
  openModal(modalId) {
    (<any>$(`#${modalId}`)).modal();
  }
}
