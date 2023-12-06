import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ToolsStatComponent } from './tools-stat/tools-stat.component';
import { SingleToolComponent } from './single-tool/single-tool.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { ToolModule } from './tools-stat/tools-stat.module';


@NgModule({
    declarations: [
        AppComponent,
        ToolsStatComponent,
        SingleToolComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        ToolModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
