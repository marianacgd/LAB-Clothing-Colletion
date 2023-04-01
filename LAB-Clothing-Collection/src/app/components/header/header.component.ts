import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Placement as PopperPlacement, Options } from '@popperjs/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  logout(){
    sessionStorage.removeItem('logado');
    this.router.navigate(['/login']);
  }
}
