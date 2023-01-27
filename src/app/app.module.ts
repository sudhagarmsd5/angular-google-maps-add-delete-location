import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule, GoogleMapsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
