import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.css']
})
export class NavigationPanelComponent implements OnInit {

  logged_in: Boolean;
  username: String;
  constructor() {
    this.logged_in = true;
    this.username = "User";
  }

  changeLanguage(){

  }


  ngOnInit(): void {
  }

}
