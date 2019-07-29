import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public proficiencies = [
    {
      title: 'Expert',
      skills: [
        { title: 'JavaScript', icon: 'js' },
        { title: 'Angular', icon: 'angular' },
        { title: 'NodeJS', icon: 'nodejs' },
        { title: 'MySQL', icon: 'js' },
        { title: 'JavaScript', icon: 'js' },
        { title: 'Angular', icon: 'angular' },
        { title: 'NodeJS', icon: 'nodejs' },
        { title: 'MySQL', icon: 'js' },
        { title: 'JavaScript', icon: 'js' },
        { title: 'Angular', icon: 'angular' },
        { title: 'NodeJS', icon: 'nodejs' },
        { title: 'JavaScript', icon: 'js' },
        { title: 'Angular', icon: 'angular' },
        { title: 'NodeJS', icon: 'nodejs' },
        { title: 'MySQL', icon: 'js' }
      ]
    },
    // {
    //   title: 'Competent',
    //   skills: [
    //     { title: '.NET Core', icon: 'js' },
    //     { title: 'Docker', icon: 'js' },
    //     { title: 'Terraform', icon: 'js' },
    //     { title: 'Azure', icon: 'js' },
    //     { title: 'AWS', icon: 'js' }
    //   ]
    // },
    // {
    //   title: 'Learning',
    //   skills: [
    //     { title: '.NET Core', icon: 'js' },
    //     { title: 'Docker', icon: 'js' },
    //     { title: 'Terraform', icon: 'js' },
    //     { title: 'Azure', icon: 'js' },
    //     { title: 'AWS', icon: 'js' }
    //   ]
    // },
  ];


  constructor() { }

  ngOnInit() {
  }

}
