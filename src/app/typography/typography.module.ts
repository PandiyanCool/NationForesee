import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TypographyComponent } from './typography.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
    imports: [BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule
    ],
    exports: [],
    declarations: [TypographyComponent, FilterPipe],
    providers: []
})

export class TypographyModule { }
