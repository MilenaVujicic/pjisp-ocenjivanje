import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserPageComponent} from "./main-component/user-page/user-page.component";
import {NavigationPanelComponent} from "./main-component/navigation-panel/navigation-panel.component";
import {MainComponentComponent} from "./main-component/main-component.component";
import {AppComponent} from "./app.component";
import {ResultsPageComponent} from "./main-component/results-page/results-page.component";

const routes: Routes = [
  {
    path:'user',
    component:UserPageComponent,
    pathMatch:'full'
  },
  {
    path:'',
    component:NavigationPanelComponent,
    pathMatch:'full'
  },
  {
    path:'results',
    component:ResultsPageComponent,
    pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
