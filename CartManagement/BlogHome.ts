// JavaScript source code
$(window).scroll(function(){
  if($(document).scrollTop() > 100){
    $('nav').addClass('animate');
  }else{
    $('nav').removeClass('animate');
  }
})

window.onload = function() {
Blogs= JSON.parse(sessionStorage.getItem('Blogs'));
document.getElementById("items").innerHTML = Blogs.length;
  
};


function addBlog(){
 var newBlog = new Object();


    newBlog .title = document.getElementById('title').value;
    newBlog .desc = document.getElementById('desc').value;
	

    if(sessionStorage.Blogs)
    {
     
	 Blogs= JSON.parse(sessionStorage.getItem('Blogs'));
    }else{
     Blogs=[];
    }
    Blogs.push(newBlog )
	document.getElementById("items").innerHTML = Blogs.length;
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
}
	





