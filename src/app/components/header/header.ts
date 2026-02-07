import { Component } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { CollapseDirective } from 'ngx-bootstrap/collapse';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [BsDropdownModule, CollapseDirective, CollapseModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  public isCollapsed : boolean = true;
}
