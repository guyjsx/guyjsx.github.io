import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  public aboutMe = [
    {
      name: 'Golf',
      icon: 'golf',
      asset: 'test-1-img',
      desc: 'As outdoor enthusiasts, my fiance and I enjoy finding beautiful places on earth.'
    },
    {
      name: 'Mountain Biking',
      icon: 'mtb',
      asset: 'mtb-img',
      desc: 'Mountain biking has kept up my fitness level and provides an exciting challenge.'
    },
    {
      name: 'Golf',
      icon: 'gaming',
      asset: 'test-2-img',
      desc: 'I enjoy the in-depth mechanics and science behind the golf swing.'
    },
    {
      name: 'Gaming',
      icon: 'gaming',
      asset: 'test-3-img',
      desc: 'Gaming has always been a major stress reliever in my life.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
