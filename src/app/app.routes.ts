import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { About } from './pages/about/about';

export const routes: Routes = [
    {path: '', component: Homepage},
    {path: 'about', component: About}
];
