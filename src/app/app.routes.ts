import { Routes } from '@angular/router';
import { Homepage } from './pages/homepage/homepage';
import { About } from './pages/about/about';
import { Contacts } from './pages/contacts/contacts';

export const routes: Routes = [
    {path: '', component: Homepage},
    {path: 'about', component: About},
    {path: 'contacts', component: Contacts}
];
