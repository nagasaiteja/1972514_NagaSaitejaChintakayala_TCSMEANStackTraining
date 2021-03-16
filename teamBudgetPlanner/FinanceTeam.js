window.onload = function() {
  getdata();
};

function getdata(){
	//alert("hi");
	 var retrievedObject = JSON.parse(sessionStorage.getItem('ProjectManager'));
	 console.log(retrievedObject);
	 var html = "<table border='1|1'>";
for (var i = 0; i < retrievedObject.length; i++) {
    html+="<tr>";
    html+="<td>"+retrievedObject[i].clientname+"</td>";
    html+="<td>"+retrievedObject[i].projectname+"</td>";
    html+="<td>"+retrievedObject[i].budget+"</td>";
    
    html+="</tr>";

}
html+="</table>";
document.getElementById("datas").innerHTML = html;


}
