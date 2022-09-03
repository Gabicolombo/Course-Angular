import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  food: String;
  successAlert: boolean;
  warningAlert: boolean;

  onClick(){
    this.clearValues();
    if(this.food == undefined){
      this.warningAlert = true;
      this.successAlert = false;
    }
    else {
      this.successAlert = true;
      this.warningAlert = false;
      this.food = null;
    }
  }

  clearValues(){
    this.warningAlert = false;
    this.successAlert = false;
  }
}
