import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';  
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';  
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-homepage',
  imports: [FontAwesomeModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faInstagram = faInstagram;
}
