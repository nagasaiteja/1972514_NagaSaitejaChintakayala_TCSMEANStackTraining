function add(){
	//alert("add");

	
	var newProjectManager = new Object();

    newProjectManager .clientname = document.getElementById('clientname').value;
    newProjectManager .projectname = document.getElementById('projectname').value;
    newProjectManager .budget = document.getElementById('budget').value;

    if(sessionStorage.ProjectManager)
    {
     ProjectManager= JSON.parse(sessionStorage.getItem('ProjectManager'));
    }else{
     ProjectManager=[];
    }
    ProjectManager.push(newProjectManager )
    sessionStorage.setItem('ProjectManager', JSON.stringify(ProjectManager));
	alert("details added sucssfully");
	cleartext();

	
	
};

function cleartext(){
	//alert("hi");
	//console.log("hi");
 document.getElementById("clientname").value = " ";
 document.getElementById("projectname").value = " ";
 document.getElementById("budget").value = " ";
}
