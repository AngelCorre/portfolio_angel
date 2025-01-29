import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { IconCreditsComponent } from './pages/icon-credits/icon-credits.component';

export const routes: Routes = [

    {path:'home', component:HomeComponent},
    {path:'', component:HomeComponent},
    {path: 'projects', component:ProjectsComponent},
    {path: 'home/projects', component:ProjectsComponent},
    {path: 'resume', component:ResumeComponent},
    {path: 'icons', component:IconCreditsComponent}
];
