import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';  
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';  
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Project } from '../../models/project/project.model';
import { ProjectCard } from '../../components/project-card/project-card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [FontAwesomeModule, ProjectCard, NgFor],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
})
export class Homepage
{
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;

  projects: Project[] = [
    { id:1, title:'My App', description:'A short summary', imageUrl:'./test.png', link:'https://...' },
    { id:2, title:'Another', description:'Another summary', imageUrl:'./test.png' },
    { id:3, title:'Another', description:'Another summary', imageUrl:'./test.png' },
    { id:4, title:'Another', description:'Another summary', imageUrl:'./test.png' }
  ];
}
