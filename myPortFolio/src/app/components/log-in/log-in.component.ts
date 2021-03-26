import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'/* Components */
import { Router } from '@angular/router'
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
name : string;
names : string;
  constructor( private router : Router) { }

  ngOnInit(): void {
  }
  Login(){
  
   

   var sname = sessionStorage.getItem("name");
   var  pname = sessionStorage.getItem("pswd");
    console.log(document.getElementById("name").value);
    console.log(document.getElementById("names").value);
    console.log(sname);
    console.log(pname);

    if(document.getElementById("name").value == sname && document.getElementById("names").value == pname){
      alert("login Sucessful");
      this.router.navigate(['/profile']);
    }
    else{
      alert("username or passwrd wrong");
    }
  }
}
