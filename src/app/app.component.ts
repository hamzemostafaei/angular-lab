import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MoneyComponent } from '@angular-lab/ui';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MoneyComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-lab';
}
