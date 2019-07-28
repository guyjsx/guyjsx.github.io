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
      asset: 'test-1-img'
    },
    {
      name: 'Mountain Biking',
      icon: 'mtb',
      asset: 'mtb-img'
    },
    {
      name: 'Golf',
      icon: 'gaming',
      asset: 'test-2-img'
    },
    {
      name: 'Gaming',
      icon: 'gaming',
      asset: 'test-3-img'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
