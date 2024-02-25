import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AuthService } from './auth.service';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    DashboardComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
  ],
})
export class AppComponent {
  title = 'profit-manager';

  constructor(
    private authService: AuthService,
    public navigationService: NavigationService
  ) {}

  ngOnInit() {
    if (this.authService.currentUserValue || this.authService.isGuestMode()) {
      this.navigationService.navigateToDashboard();
    } else {
      this.navigationService.navigateToWelcome();
    }
  }
}
