import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  constructor(private router: Router) {}
  navigatetoLogin() {
    this.router.navigate(['/login']);
  }
}
