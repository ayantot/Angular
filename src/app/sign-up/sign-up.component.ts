import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}