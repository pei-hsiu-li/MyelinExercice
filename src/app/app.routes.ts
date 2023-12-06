import { RouterModule, Routes } from '@angular/router';
import { ToolsStatComponent } from './tools-stat/tools-stat.component';
import { SingleToolComponent } from './single-tool/single-tool.component';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
    { path: 'tools-stat', component: ToolsStatComponent, pathMatch: 'full' },
    { path: 'tool/:toolID', component: SingleToolComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: []
  })
export class AppRoutingModule { }