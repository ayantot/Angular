import { Component, EventEmitter,Input, Output, OnInit } from '@angular/core';

import { User } from './user';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
@Input() label: string = "hidden";
@Output() onClick = new EventEmitter<string>();

  user : User ={  
  name : "Doe",
  firstname : "John",
  age : 25,
  quote : '',
  photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
  }


onClickButton() {
    if(this.label == "hidden"){
      this.label = "visible";
    }
    else{
      this.label = "hidden";
    }
    this.onClick.emit(this.label);
    
  }
  constructor(){

    this.user.photo = 'https://randomuser.me/api/portraits/lego/2.jpg';
  }

  



  ngOnInit() {
  }

}
