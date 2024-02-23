import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './anime/anime.component';
import { EnglishComponent } from './english/english.component';
import { HindiComponent } from './hindi/hindi.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
    {'path':'',component:HomeComponent},
    {'path':'navbar',component:NavbarComponent},
    {'path':'anime',component:AnimeComponent},
    {'path':'english',component:EnglishComponent},
    {'path':'hindi',component:HindiComponent},
    {'path':'about',component:AboutComponent},
   
];
