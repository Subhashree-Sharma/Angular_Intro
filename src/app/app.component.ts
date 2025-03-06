import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Welcome to BridgeLabz!';
  logoUrl = 'resource/4.jpeg.jpeg'; 
  bridgeLabUrl = 'https://www.bridgelabz.com';

  openBridgeLabzSite() {
    //Opens in new tab
    window.open(this.bridgeLabUrl, '_blank'); 
  }
}
