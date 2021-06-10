import { Component, OnInit } from '@angular/core';

import { templatedriven } from './templatedriven';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  model = new templatedriven('', '', '', '');

  submitted = false;
  onSubmit() {
    console.log(this.model);
    this.submitted = true;


  }

  constructor() {
  }

  ngOnInit(): void {

  }

  validate() {

  }

}
// onSubmit(kshr:any) {
//   console.log(kshr);
//   this.submitted = true;