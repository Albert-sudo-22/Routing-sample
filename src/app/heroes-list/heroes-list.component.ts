import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HEROES } from '../heroes'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  imports: [CommonModule],
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'], 
})
export class HeroesListComponent {
  heroes = HEROES;

  constructor(private router: Router) {} 

  showHeroDetails(heroId: number) {
    this.router.navigate(['/hero', heroId]);
  }
}
