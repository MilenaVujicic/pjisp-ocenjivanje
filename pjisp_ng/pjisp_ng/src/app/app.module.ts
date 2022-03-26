import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponentComponent } from './main-component/main-component.component';
import { NavigationPanelComponent } from './main-component/navigation-panel/navigation-panel.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { UserPageComponent } from './main-component/user-page/user-page.component';
import { ResultsPageComponent } from './main-component/results-page/results-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    NavigationPanelComponent,
    UserPageComponent,
    ResultsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
