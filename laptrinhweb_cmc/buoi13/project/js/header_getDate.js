var datetime = new Date();
var day = datetime.getDate();
var month = datetime.getMonth() + 1; 
var year = datetime.getFullYear();
document.getElementById("date").innerText = day + "/" + month + "/" + year ;
