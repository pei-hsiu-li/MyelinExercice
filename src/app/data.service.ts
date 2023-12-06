import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private toolsData = new BehaviorSubject<any[]>([]);
  toolsData$ = this.toolsData.asObservable();

  setToolsData(tools: any[]) {
    this.toolsData.next(tools);
  }
}