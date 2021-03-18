// JavaScript source code
$(window).scroll(function(){
  if($(document).scrollTop() > 100){
    $('nav').addClass('animate');
  }else{
    $('nav').removeClass('animate');
  }
})

window.onload = function() {
  getdata();
};

function getdata(){
	//alert("hi");
	 var retrievedObject = JSON.parse(sessionStorage.getItem('Blogs'));
	 console.log(retrievedObject);
	 var html = "<div>"
for (var i = 0; i < retrievedObject.length; i++) {
    html+="<div style='margin-left : 50px; padding-top:10px;'>";
	html+="<h3 style= 'margin-top: 10px;'>Blog"+(i+1)+"</h3>";
    html+="<div  style='padding-top:5px;'>Title : "+retrievedObject[i].title+"</div>";
    html+="<div style='padding-top:5px; padding-bottom:10px;'> Article : "+retrievedObject[i].desc+"</div>";
    html+="<img src="+retrievedObject[i].image+" id='imagel'/>";
  
    html+="</div>";
	html+= "<br/>"
	html+="<br/>";
	html+= "<br/>";

}
	 html+="</div>"

document.getElementById("datas").innerHTML = html;


}
function addBlog(){
 var newBlog = new Object();


    newBlog .title = document.getElementById('title').value;
    newBlog .desc = document.getElementById('desc').value;
    newBlog .image = document.getElementById('img').files[0].name;
	

    if(sessionStorage.Blogs)
    {
     Blogs= JSON.parse(sessionStorage.getItem('Blogs'));
    }else{
     Blogs=[];
    }
    Blogs.push(newBlog )
    sessionStorage.setItem('Blogs', JSON.stringify(Blogs));
	alert("details added sucssfully");
	cleartext();
	getdata();
	
	
};

function cleartext(){
	//alert("hi");
	//console.log("hi");
 document.getElementById("title").value = " ";
 document.getElementById("desc").value = " ";
 document.getElementById("img").files[0].name = " ";
}
	





