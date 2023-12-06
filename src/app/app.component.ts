import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router){}
  home = true;
  fontSize = 16;
 
  goOutils(){
    this.router.navigate(['/tools-stat'])
    this.home = false;
  }

  goHome(){
    this.router.navigate([''])
    this.home = true;
  }

  increaseFontSize() {
    this.fontSize += 2;
    document.body.style.fontSize = this.fontSize + 'px';
  }

  decreaseFontSize() {
    this.fontSize -= 2;
    document.body.style.fontSize = this.fontSize + 'px';
  }
}
