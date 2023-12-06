import { NgModule } from '@angular/core';
import { ToolsStatComponent } from '../tools-stat/tools-stat.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app.routes';


@NgModule({
    declarations: [
        ToolsStatComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
    ]
})
export class ToolModule { }
