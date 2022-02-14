import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  public logoName = "BookStore";
  constructor(private link: Router, private path: Location ) { }

  public isOnHomepage(): boolean {
    return this.link.url === '/' || this.link.url === '' ? true : false;
  }

  public goBack() {
    this.path.back()
  }
}
