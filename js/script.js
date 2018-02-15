// JavaScript Document
function add_goal(){
    var GoalName = document.getElementById("GoalName").value;
    
    localStorage.clear
    localStorage.setItem("Goal_Name", GoalName);   
}

