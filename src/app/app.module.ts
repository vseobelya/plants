import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { HttpClientModule } from '@angular/common/http';
import { StaticPageComponentComponent } from './static-page-component/static-page-component.component';
import {StaticPageService} from './static-page.service';
import {AuthService} from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponentComponent,
    StaticPageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StaticPageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
