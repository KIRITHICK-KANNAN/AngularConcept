import { Component } from '@angular/core';
import { Router, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  constructor(private router: Router) {}
  navigatetosignIn() {
    this.router.navigate(['/sign-in']);
  }
}
