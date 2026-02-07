import { Component } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [BsDropdownModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  faCoffee = faCoffee;
  faGithub = faGithub;
}
