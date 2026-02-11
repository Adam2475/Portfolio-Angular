import { Component, Input } from '@angular/core';
import { Project } from '../../models/project/project.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [NgIf],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css'],
})
export class ProjectCard {
  @Input() project!: Project;
}
