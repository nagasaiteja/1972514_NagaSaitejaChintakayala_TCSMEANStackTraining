window.onload = function() {
  getdata();
};

function getdata(){
	//alert("hi");
	 var retrievedObject = JSON.parse(sessionStorage.getItem('Blogs'));
	 console.log(retrievedObject);
	 var html = "<table border='1|1'>";
for (var i = 0; i < retrievedObject.length; i++) {
    html+="<tr>";
    html+="<td>"+retrievedObject[i].title+"</td>";
    html+="<td>"+retrievedObject[i].desc+"</td>";
    
    html+="</tr>";

}
html+="</table>";
document.getElementById("datas").innerHTML = html;
var total =0;
for (var i = 0; i < retrievedObject.length; i++) {
  
    total = total+ Number(retrievedObject[i].desc);
    


}

 var htmls = "<h3>Total amount :"+total+"</h3>";
 document.getElementById("Totalamnt").innerHTML = htmls;
}