import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-single-tool',
  templateUrl: './single-tool.component.html',
  styleUrls: ['../app.component.css']
})
export class SingleToolComponent {

  toolID: any;
  title = 'single-tool';
  toolData: any;

  constructor(private route: ActivatedRoute, public router: Router, private dataService: DataService) {

  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.toolID = params['toolID'];
      
      this.dataService.toolsData$.subscribe(tools => {
        this.toolData = tools.find(tool => tool.id === this.toolID);
      });
      console.log(this.toolID);
    });
  }
  
  goOutils(){
    this.router.navigate(['/tools-stat'])
  }
}
