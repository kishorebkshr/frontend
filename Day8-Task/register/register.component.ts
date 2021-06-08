import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: any = [
    {
    "name": "akun",
    "Age": 22,
    "Address": "Thanjavur",
    "marks": [
      { "sem1": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem2": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem3": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem4": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem5": { "English": "190", "Maths": "170", "Tamizh": "195" } }
    ] 
  },
  {
    "name": "kishore",
    "Age": 23,
    "Address": "chennai",
    "marks": [
      { "sem1": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem2": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem3": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem4": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem5": { "English": "190", "Maths": "170", "Tamizh": "195" } }
    ]
  },
  {
    "name": "kshr",
    "Age": 24,
    "Address": "VNR",
    "marks": [
      { "sem1": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem2": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem3": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem4": { "English": "190", "Maths": "170", "Tamizh": "195" } },
      { "sem5": { "English": "190", "Maths": "170", "Tamizh": "195" } }
    ]
  }

]

  constructor() { }
  

  ngOnInit(): void {
  }
  

  search(value: any) {
    for (var i = 0; i < this.users.length; i++) {
      if (value == this.users[i].name || value == this.users[i].Age || value == this.users[i].Address) {
      
        console.log(this.users[i]);
        break;
      }

    }
   
  }

}
