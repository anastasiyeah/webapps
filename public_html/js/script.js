// JavaScript Document

function add_goal(){
    var GoalName = document.getElementById("GoalName").value;
    
    localStorage.clear
    localStorage.setItem("Goal_Name", GoalName);   
}

document.getElementById("fornavnet").innerHTML = localStorage.getItem("frontname");
document.getElementById("efternavnet").innerHTML = localStorage.getItem("lastname");