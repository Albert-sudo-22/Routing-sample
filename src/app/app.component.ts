import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-router-sample';

  constructor(private router: Router) {}

  navigateToCrisisCenter(): void {
    this.router.navigate(['/crisis-list']);
  }

  navigateToHeroes(): void {
    this.router.navigate(['/heroes-list']);
  }
}
