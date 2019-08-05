import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public innerWidth = 0;
  public index = 0;
  public isProjectOpen = false;
  public projects = [
    {
      title: 'Verastem Implemenation',
      imgClass: 'bio',
      animateClass: ''
    },
    {
      title: 'Bio-Pharma CRM',
      imgClass: 'phone',
      animateClass: ''
    },
    {
      title: 'Restorative Justice Louisville',
      imgClass: 'rjl',
      animateClass: ''
    },
    {
      title: 'Micro-App Re-Architecture',
      imgClass: 'api',
      animateClass: ''
    },
    {
      title: 'UPS Supervisor / Full-Time Student',
      imgClass: 'leader',
      animateClass: ''
    },
    {
      title: 'GraphQL',
      imgClass: 'api',
      animateClass: ''
    },
    {
      title: 'Leadership',
      imgClass: 'leader',
      animateClass: ''
    },
    {
      title: 'Restorative Justice Louisville',
      imgClass: 'rjl',
      animateClass: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  animateItem($event, animateClass) {
    animateClass = $event.type === 'mouseover' ? 'animate-project' : '';
  }

  addClass(event): void {
    event.target.className += 'myClass';
  }

  removeClass(event): void {
    event.target.className = event.target.className.replace('myClass', '');
  }

  toggleProject(index) {
    this.index = index;
    this.isProjectOpen = !this.isProjectOpen;
  }
}
