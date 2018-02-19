    // JavaScript Document


$(document).ready(function () {
    var i = 0;
    for (i = 0; i < localStorage.length; i++) {
        var taskID = "task-" + i;
        $('#taskList').append("<li id='" + taskID + "'>" + localStorage.getItem(taskID) + "</li>");
    }
    $('#clear').click(function () {
        localStorage.clear();
    });
    $('#taskEntryForm').submit(function () {
        if ($('#taskInput').val() !== "") {
            var taskID = "task-" + i;
            var taskMessage = $('#taskInput').val();
            localStorage.setItem(taskID, taskMessage);
            $('#taskList').append("<li class='task' id='" + taskID + "'>" + taskMessage + "</li>");
            var task = $('#' + taskID);
            task.css('display', 'none');
            task.slideDown();
            $('#taskInput').val("");
            i++;
        }
        location.href = "goals.html";
        return false;
    });

    $('#taskList').on("click", "li", function (event) {
        console.log("click");
        self = $(this);
        console.log(self);
        taskID = self.attr('id');
        console.log(self[0].slideUp);
        localStorage.removeItem(taskID);
       // self.slideUp('slow', function () {
            self.remove();
        //});

    });


});

