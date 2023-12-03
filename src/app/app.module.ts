// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolsStatComponent } from './tools-stat/tools-stat.component';
import { SingleToolComponent } from './single-tool/single-tool.component';
import { CommonModule } from '@angular/common';
import { appRoutes } from './app.routes';


@NgModule({
    declarations: [
        SingleToolComponent
    ],
    imports: [
        BrowserModule,
        AppComponent,
        ToolsStatComponent,
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
})
export class AppModule { }
