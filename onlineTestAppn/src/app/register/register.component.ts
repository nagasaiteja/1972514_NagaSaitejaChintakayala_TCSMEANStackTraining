import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private route : Router) { }

  ngOnInit() {
  }

  OnSubmit(name:string,email:string){
   var user = name + " " + email;
        localStorage.clear();
        localStorage.setItem('participant',user);
        this.route.navigate(['/quiz']);
      
    
  }

}
