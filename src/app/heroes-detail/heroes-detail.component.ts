import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { HEROES } from '../heroes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css'],
  imports: [CommonModule],
})
export class HeroesDetailComponent implements OnInit {
  hero: any;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const heroId = Number(this.route.snapshot.paramMap.get('id'));
    this.hero = HEROES.find((h) => h.id === heroId);
  }

  goBackToHeroes(): void {
    this.router.navigate(['/heroes-list']);
  }
}
