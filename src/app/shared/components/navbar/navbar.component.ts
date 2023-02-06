import { Component, HostListener } from '@angular/core';
import { freeSet } from '@coreui/icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public innerWidth: any;
  public sm: number = 576;
  public md: number = 768;
  public lg: number = 992;
  public xl: number = 1200;
  public xxl: number = 1400;
  public icons = freeSet ;

  public navbar: string[] = [
    'ABOUT',
    'PROJECTS',
    'SKILLS'
  ]

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(window.innerWidth)
    this.innerWidth = window.innerWidth;
  }
}
