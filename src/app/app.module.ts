import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HeroesModule } from './heroes/heroes.module';
import { MaterialModule } from './material/material.module';
import { Error404Component } from './shared/error404/error404.component';


@NgModule({
  declarations: [AppComponent, Error404Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeroesModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
