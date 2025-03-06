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
  //Uc-05
  nameError:string ='';

  openBridgeLabzSite() {
    //Opens in new tab(Uc-03)
    window.open(this.bridgeLabUrl, '_blank'); 
  }

  // ngOnInit():void{
  //   this.title = "Hello, from Bridgelabz";
  // }

  //Uc-05
  onClick($event: MouseEvent){
    console.log("Save button is clicked!", $event);
    window.open(this.logoUrl, "_blank");
  }

  onInput(event:Event){
    console.log("Change Event Occured!",event.target);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect!";
  }
}
