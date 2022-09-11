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
  // task 2
  username: string = '';
  // task 3
  isVisible = true;
  count = 0;
  clicks: number [] = [];

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

  onValidateName(event: any){
    if(event.target.value != '' && event.target.value != undefined){
      this.username = event.target.value;
    }
  }

  changeVisibility(){
    this.isVisible = !this.isVisible;
    this.count += 1;
    this.clicks.push(this.count);
  }
}
