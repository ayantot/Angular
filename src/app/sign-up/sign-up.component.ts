import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Signup } from '../sign-up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  mail : Signup = {
    email: "Mon email"
  }
  model: Signup = new Signup();
  

  constructor() { }

  onSubmit(){
    console.log(this.model);
  }

  ngOnInit() {
  }

}
