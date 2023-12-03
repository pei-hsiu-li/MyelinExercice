import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-tool',
  templateUrl: './single-tool.component.html'
})
export class SingleToolComponent {

  toolID: string | undefined;

  constructor(private route: ActivatedRoute, public router: Router) {
    this.route.params.subscribe(params => {
      this.toolID = params['toolID'];
    });
  }
  
  goHome(){
    this.router.navigate([''])
  }
}
