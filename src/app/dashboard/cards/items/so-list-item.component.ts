import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-so-list-item',
  templateUrl: './so-list-item.component.html',
})

export class SoListItemComponent {

  @Input() title: string;

  @Input() creationDate: number;

  @Input() ownerLink: string;

  @Input() ownerName: string;

  @Input() answerCount: number;

  @Input() hasAcceptedAnswer: boolean;

  @Input() questionLink: string;

  constructor() {
  }

}
