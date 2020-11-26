import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routing
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
