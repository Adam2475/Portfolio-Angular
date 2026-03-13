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
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
// import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import { faMySql } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../models/project/project.model';
import { ProjectCard } from '../../components/project-card/project-card';
import { NgFor } from '@angular/common';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  imports: [FontAwesomeModule, TooltipModule, ProjectCard, NgFor],
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
  faAngular = faAngular;
  faPhp = faPhp;
  faGraduationCap = faGraduationCap;
  faAddressBook = faAddressBook;
  // faProjectDiagram = faProjectDiagram;
  faBriefcase = faBriefcase;
  faEnvelope = faEnvelope;
  faUser = faUser;
  // faMySql = faMySql;

  projects: Project[] = [
    { 
      id:1, 
      title:'Minishell', 
      description:'A replica of the bash shell written in C.', 
      imageUrl:'./minishell.png', 
      link:'https://adam2475.github.io/Minishell-v86-Deploy/' 
    }
  ];
}
