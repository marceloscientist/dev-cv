import { Component } from '@angular/core';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.css']
})

export class RightColumnComponent {

  subTopics: any[] = [
    {
      title: "Pro XP",
      details: [
        { abstract: "We've been working on Java EE, and Angular altogether" },
        { location: "Qintess", from: "April, 2022", to: "recent", abstract: "We've been working on Java EE, and Angular altogether", icon: "fa fa-calendar", }
      ]
    },
    {
      title: "Grads",
      details: [
        { location: "Qintess", from: "April, 2022", to: "recent", abstract: "We've been working on Java EE, and Angular altogether", icon: "fa fa-calendar", },
        { location: "Qintess", from: "April, 2022", to: "recent", abstract: "We've been working on Java EE, and Angular altogether", icon: "fa fa-calendar", }
      ]
    }
  ]
}


