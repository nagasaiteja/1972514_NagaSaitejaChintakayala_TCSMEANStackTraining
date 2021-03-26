import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

name : string = "";
names : any;
lname : any;
fname : any;
  constructor() { }

  ngOnInit() {
  }

  Register(){
 

    sessionStorage.setItem("name",document.getElementById("name").value);
    sessionStorage.setItem("fname",document.getElementById("fname").value);
    sessionStorage.setItem("lname",document.getElementById("lname").value);
        sessionStorage.setItem("pswd",document.getElementById("names").value);


    alert("Registered successful");
  }

}
