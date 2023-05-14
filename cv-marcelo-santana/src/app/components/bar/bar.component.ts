import { Component, Input } from '@angular/core';
import { Skill } from './skill';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  
  constructor(){}

  @Input() title: string = '';
  @Input() accomplishedBar: string = '';

}
