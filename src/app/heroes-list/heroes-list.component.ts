import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HEROES } from '../heroes'; // Ensure correct path to HEROES
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-list',
  imports: [CommonModule],
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css'], // Fixed property name from 'styleUrl' to 'styleUrls'
})
export class HeroesListComponent {
  heroes = HEROES;

  constructor(private router: Router) {} // Inject Router properly

  showHeroDetails(heroId: number) {
    this.router.navigate(['/hero', heroId]); // Use Router to navigate
  }
}
