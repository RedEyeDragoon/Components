import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 22, label: '# of users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' }
  ];
  items = [
    { image: '/assets/Images/couch.jpeg', title: 'Couch', description: 'sit on this' },
    { image: '/assets/Images/dresser.jpeg', title: 'Dresser', description: 'put clothes in this' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
