import { Component, OnInit } from '@angular/core';
import { templatedriven } from './TemplateDriven';
import { UsersService } from '../../users.service';


@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.css']
})
export class LoginTemplateComponent implements OnInit {
  model = new templatedriven('', '', '', '');
  submitted = false;
  // onSubmit() {
  //   console.log(this.model);
  //   this.submitted = true;
  // }
  constructor(private kshr: UsersService) { }

  ngOnInit(): void {
  }
  validate() {

  }
  userfound: any;
  userpassfound: any;
  onSubmit(kshr1: any) {
    var userfound = false;
    var userpassfound = false;
    for (var i = 0; i < this.kshr.user.length; i++) {
      if (this.model.name == this.kshr.user[i].firstName) {
        userfound = true;
        if (this.model.password == this.kshr.user[i].Password) {
          userpassfound = true;
          break;
        }
      }

    }
    if (userfound && userpassfound) alert("login success")
    else if (userfound && !userpassfound) alert("INVALID PASSWORD")
    else alert("user name not found")

  }
}
