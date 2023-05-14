import { Component } from '@angular/core';
import { Skill } from '../components/bar/skill';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.css']
})
export class LeftColumnComponent {

  programming:Skill[] = [
    {  "title": "Java", "accomplishedBar": "90%" },
    {  "title": "Spring Framework", "accomplishedBar": "85%" },
    {  "title": "Java EE", "accomplishedBar": "85%" },
    {  "title": "JS & ECMAS", "accomplishedBar": "95%" },
    {  "title": "Angular", "accomplishedBar": "85%" },
    {  "title": "ReactJS", "accomplishedBar": "80%" },
  ]


  languages:Skill[] = [
    {  "title": "English", "accomplishedBar": "90%" },
    {  "title": "Portuguese", "accomplishedBar": "100%" },
    {  "title": "Japanese", "accomplishedBar": "20%" },
    {  "title": "German", "accomplishedBar": "60%" },
    {  "title": "Spanish", "accomplishedBar": "60%" },
    {  "title": "French", "accomplishedBar": "40%" },
  ]
}
