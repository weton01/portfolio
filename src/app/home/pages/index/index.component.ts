import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface Myself  {
  title: string;
  description: string;
}

export interface Project{ 
  image: string,
  
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  public tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  public myself: Myself[] = [
    {title: 'past', description: 'I am currently studying new ways of structuring my projects, so, hypothetically, I am able to shorten the creation time and follow a more straight line of the time it takes me to accomplish it.'},
    {title: 'present', description: 'I am currently studying new ways of structuring my projects, so, hypothetically, I am able to shorten the creation time and follow a more straight line of the time it takes me to accomplish it.'},
    {title: 'future', description: 'I am currently studying new ways of structuring my projects, so, hypothetically, I am able to shorten the creation time and follow a more straight line of the time it takes me to accomplish it.'},
  ]

  public tags: string[] = [
    "Node.js", "Typescript", "React", "Angular", "Terraform",
    "Node.js", "Typescript", "React", "Angular", "Terraform",
    "Node.js", "Typescript", "React", "Angular", "Terraform",
    "Node.js", "Typescript", "React", "Angular", "Terraform",
    "Node.js", "Typescript", "React", "Angular", "Terraform",
    "Node.js", "Typescript", "React", "Angular", "Terraform",
    "Node.js", "Typescript", "React", "Angular", "Terraform",
    "Node.js", "Typescript", "React", "Angular", "Terraform",
    "Node.js", "Typescript", "React", "Angular", "Terraform",
  ]

  public projects: 
}
