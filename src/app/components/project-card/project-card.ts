import { Component, Input } from '@angular/core';
import { Project } from '../../models/project/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css'],
})
export class ProjectCard {
  @Input() project!: Project;
}
