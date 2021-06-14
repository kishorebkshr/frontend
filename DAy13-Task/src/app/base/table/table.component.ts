import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // @Input() user: any = {};
  constructor(private router: Router, private us: UsersService, private location: Location) { }
  local: any = this.us.detail;
  detail: any;
  ngOnInit(): void {

  }

  goBack() {
    this.router.navigateByUrl('back');
  }

  editInfo() {
    this.detail = this.local;
  }

  updInfo() {
    // this.location.back();
    alert("Successfully Updated...");
    // console.log(this.us.user);
  }
  value: any = [];
  getData() {
    this.us.getServerData().subscribe(response => {
      this.value = response;
      console.log(response);
    });


  }





}
