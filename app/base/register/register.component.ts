import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submit(user: string)
  {
  
    if(user !="") alert("welcome"+" "+user)
    else alert("fill the form")
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
