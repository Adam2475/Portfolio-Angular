import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { faGithub } from '@fortawesome/free-brands-svg-icons';  
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';  
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
// import { faMySql } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../models/project/project.model';
import { ProjectCard } from '../../components/project-card/project-card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [FontAwesomeModule, ProjectCard, NgFor, TooltipModule],
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
})
export class Homepage
{
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJs = faJs;
  faPhp = faPhp;
  // faMySql = faMySql;

  projects: Project[] = [
    { id:1, title:'My App', description:'A short summary', imageUrl:'./test.png', link:'https://...' },
    { id:2, title:'Another', description:'Another summary', imageUrl:'./test.png' },
    { id:3, title:'Another', description:'Another summary', imageUrl:'./test.png' },
    { id:4, title:'Another', description:'Another summary', imageUrl:'./test.png' }
  ];
}
