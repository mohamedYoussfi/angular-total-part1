import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions : Array<any> =[
    {title :"Home", "route":"/home", icon : "house"},
    {title :"Products", "route":"/products", icon : "search"},
    {title :"New Product", "route":"/newProduct", icon : "safe"}
  ];
  currentAction :any;

  setCurrentAction(action: any) {
    this.currentAction = action;
  }
}
