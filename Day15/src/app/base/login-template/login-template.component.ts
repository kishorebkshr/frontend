import { Component, OnInit, } from '@angular/core';
import { templatedriven } from './TemplateDriven';
import { UsersService } from '../../users.service';
import { Router } from '@angular/router';



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

  // loginUser: any = {};
  // @Output() table = new EventEmitter();
  constructor(private userservice: UsersService, private router: Router) { }

  ngOnInit(): void {
  }
  validate() {

  }

  userfound: any;
  userpassfound: any;
  onSubmit(kshr1: any) {
    var userfound = false;
    var userpassfound = false;
    for (var i = 0; i < this.userservice.user.length; i++) {
      if (this.model.name == this.userservice.user[i].firstName) {
        userfound = true;

        if (this.model.password == this.userservice.user[i].Password) {
          userpassfound = true;
          this.userservice.detail = this.userservice.user[i];
          console.log(this.userservice.detail);
        }
      }

    }
    if (userfound && userpassfound) {
      alert("login success")


      this.router.navigateByUrl('login-page');
    }





    else if (userfound && !userpassfound) { alert("INVALID PASSWORD") }
    else { alert("user name not found") }

  }
}
