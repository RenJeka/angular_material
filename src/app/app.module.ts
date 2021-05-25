import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';

import { AppComponent } from './app.component';
import { MatTableOneComponent } from './mat-table-one/mat-table-one.component';
import { DynamicFormsOneComponent } from './forms/dynamic-forms-one/dynamic-forms-one.component';

@NgModule({
  declarations: [
    AppComponent,
    MatTableOneComponent,
    DynamicFormsOneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    DynamicFormsMaterialUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
