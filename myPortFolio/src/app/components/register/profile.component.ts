import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  title = 'angular-material-login-template';
  names :any;
  tiles : any;

  ngOnInit(){
console.log(sessionStorage.getItem("name"));
   // document.getElementById("names").innerHtml = sessionStorage.getItem("name");
  }

  addBlog(){
  alert("hi");
     var newBlog = new Object();


    newBlog .title = document.getElementById('title').value;
    newBlog .desc = document.getElementById('desc').value;
    console.log(newBlog.title);
    this.tiles = newBlog.title;
//document.getElementById('titles0').innerHtml = newBlog.title;
document.getElementById('desc0').innerHtml = newBlog.desc;

	 var html = "<div>"
   	 var html = "<h3>Contact details</h3>";

    html+="<div  style='padding-top:5px;'>contact name : "+newBlog.title+"</div>";
    html+="<div style='padding-top:5px; padding-bottom:10px;'> phone number : "+newBlog.desc+"</div>";
  
    html+="</div>";
	html+= "<br/>"
	html+="<br/>";
	html+= "<br/>";



document.getElementById("datas").innerHTML = html;

  }

}
