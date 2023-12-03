import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolsStatComponent } from './tools-stat/tools-stat.component';
import { SingleToolComponent } from './single-tool/single-tool.component';

export const appRoutes: Routes = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'tool-stat', component: ToolsStatComponent },
    { path: 'tool/:toolID', component: SingleToolComponent },
];
