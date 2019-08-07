import { element } from 'protractor';
import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input() portfolio: any;
  public innerWidth = 0;
  public index = 0;
  public isProjectOpen = false;
  public projects = [
    {
      title: 'Micro-App Re-Architecture',
      imgClass: 'micro-api',
      animateClass: ''
    },
    {
      title: 'Implementation Architect',
      imgClass: 'pharma',
      animateClass: ''
    },
    {
      title: 'Bio-Pharma CRM',
      imgClass: 'crm',
      animateClass: ''
    },
    {
      title: 'Genesys API',
      imgClass: 'phone',
      animateClass: ''
    },
    {
      title: 'Restorative Justice Louisville',
      imgClass: 'rjl',
      animateClass: ''
    },
    {
      title: 'Promoting Healthy Conflict',
      imgClass: 'trust',
      animateClass: ''
    },
    {
      title: 'UPS: FT Night Shift & FT Student',
      imgClass: 'ups',
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
    console.log('port scroll');
    this.portfolio.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
