import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Roie Ivri';

  public isShowingMore=false;

  public toggleMore(){
    this.isShowingMore=!this.isShowingMore;
  }

}
