import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'link-button',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.css']
})
export class LinkButtonComponent {
  @Input() path: string | null = null;
  currentRoute: string;

  isActive() {
    return this.currentRoute === this.path ? { color: '#DE140E', fontWeight: 'bolder' } : { color: '#F2F2F2' };
  }

  handleClickLink() {
    if (this.path) {
      this.router.navigate([this.path]);
    }
  }

  constructor(private router: Router) {
    this.currentRoute = router.url;
  }
}
