import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home-comps/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {APP_ROUTING } from './app.routes';
import { HeaderComponent } from './components/a-header-comps/header/header.component';
import { AsideComponent } from './components/b-aside-comps/aside/aside.component';
import { MainComponent } from './components/c-main-comps/main/main.component';
import { ABtnComponent } from './components/z-btn-comps/a-btn-comps/a-btn/a-btn.component';
import { BBtnComponent } from './components/z-btn-comps/b-btn-comps/b-btn/b-btn.component';
import { CBtnComponent } from './components/z-btn-comps/c-btn-comps/c-btn/c-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    ABtnComponent,
    BBtnComponent,
    CBtnComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
