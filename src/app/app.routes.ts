import { Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';

export const routes: Routes = [
    {path: 'crisis-list', component: CrisisListComponent},
    {
        path: 'heroes-list',
        loadChildren: () => import('./heroes.module').then(m => m.HeroesModule),
      },
    {path: '', redirectTo: '/crisis-list', pathMatch: 'full'},
    {path: 'hero/:id', component: HeroesDetailComponent },
    {path: '**', component: PageNotFoundComponent},
];
