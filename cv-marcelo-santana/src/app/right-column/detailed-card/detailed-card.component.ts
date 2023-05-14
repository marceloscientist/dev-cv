import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detailed-card',
  templateUrl: './detailed-card.component.html',
  styleUrls: ['./detailed-card.component.css']
})
export class DetailedCardComponent {

  constructor(){}

  @Input() location: string = '';
  @Input() from: string = '';
  @Input() to: string = '';
  @Input() abstract: string = '';
  @Input() icon: string = 'fa fa-calendar';
 
}
