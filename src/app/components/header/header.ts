import { Component, ElementRef, HostListener } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BsDropdownModule, CollapseDirective, CollapseModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  public isCollapsed : boolean = true;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isCollapsed = true;
    }
  }
}
