import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TooltipModule, Header, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio');
}
