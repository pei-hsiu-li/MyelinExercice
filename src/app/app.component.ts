import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router){}
  title = 'ToolStat';
 
  goOutils(){
    this.router.navigate(['/tool-stat'])
  }
}
