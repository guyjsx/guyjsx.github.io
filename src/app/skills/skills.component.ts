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

        { title: 'Angular', icon: 'angular' },
        { title: 'Apollo', icon: 'apollo' },
        { title: 'Aurelia', icon: 'aurelia' },
        { title: 'AWS', icon: 'aws' },
        { title: 'Azure', icon: 'azure' },

        { title: 'Docker', icon: 'docker' },
        { title: 'ExpressJS', icon: 'express' },
        { title: 'Genesys', icon: 'genesys' },
        { title: 'Git', icon: 'git' },
        { title: 'GraphQL', icon: 'graphql' },
        { title: 'HIPAA', icon: 'hipaa' },
        { title: 'Java', icon: 'java' },
        { title: 'JavaScript', icon: 'js' },
        { title: 'Jest', icon: 'jest' },
        { title: 'JWT', icon: 'jwt' },
        { title: 'Laravel', icon: 'laravel' },
        { title: 'NestJS', icon: 'nestjs' },
        { title: 'MongoDB', icon: 'mongo' },
        { title: 'MySQL', icon: 'mysql' },
        { title: '.Net Core', icon: 'net-core' },
        { title: 'NodeJS', icon: 'nodejs' },

        { title: 'OAuth2', icon: 'oauth' },
        { title: 'PHP', icon: 'php'},
        { title: 'PostgreSQL', icon: 'postgres' },
        { title: 'React', icon: 'react' },
        { title: 'Redux', icon: 'redux' },
        { title: 'SQL', icon: 'visual-studio' },
        { title: 'Swagger', icon: 'swagger' },
        { title: 'TestCafe', icon: 'testcafe' },
        { title: 'Vue', icon: 'vue' },
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
