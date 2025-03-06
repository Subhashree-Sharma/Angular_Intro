import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //Uc-01
  title = 'Welcome to BridgeLabz!';
  //Uc-02
  logoUrl = 'resource/1.jpg.jpg'; 
  //Uc-03
  bridgeLabUrl = 'https://www.bridgelabz.com';
  //Uc-04
  userName: string = '';

  openBridgeLabzSite() {
    //Opens in new tab
    window.open(this.bridgeLabUrl, '_blank'); 
  }
}
