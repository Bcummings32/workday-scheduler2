
$(document).ready(function() {
   /* const m = moment();
    let current_time = moment().format("HH:mm")
    var hour = moment().hours();
}); */
//var dateString = moment().format('MMMM Do YYYY, h:mm:ss a');
//use moment to get current date/time
var hour = moment().hours();

function getDate() {
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
//$('#date-today h6').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));
};


function storeTodaysDate() { 
    savedSchedule = JSON.parse(localStorage.getItem(date));

//colorcode blocks
$("p:first").addClass("intro");
};
$('.colorcode').each(function(){
        var time = parseInt($(this).prop('id'));
//past less  currenthour
console.log(time)

    if(time < currentHour) { 

            $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
//present = currenthour
    else if (time===currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
//future greater than  currenthour
    else {
        $(this).addClass("future"); 
        $(this).removeClass("past");
        $(this).removeClass("present");
    };

});

  /*  if(val > currentHour && val < currentHour+6){
        if(val > currentHour && val < currentHour+6){
            
            $(this)
        }else if(val < currentHour && val > currentHour-6){
            $(this).addClass("present");
        }else if(val === currentHour){
            $(this).addClass("future");
        }
            //$(this).addClass();
        }
    }); */
  

//var currentHour = moment().format('h')
//console.log('currentHour', currentHour)

var tasks = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []
};

function colorSchedule() {
    $("input").each(function(){
        var currentHour = $(this).attr("id");
       // var row = 
    })
}

/*textarea.each(function() {
    textArray.push($(this))

}); */

checkTime()

/* function checkTime() {
    for (var i = 0; i < timeBlocks.length; i++) {
        if (currentHour < timeBlocks[i]) {
            $(timeBlocks[i]).addClass('future');
        }

        else if (currentHour > timeBlocks[i]) {
            $(timeBlocks[i]).addClass('past');   
        }
        else {
            $(timeBlocks[i]).addClass('present');
        }
    } 

    var setTasks = function() {
        /* add tasks to localStorage 
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function hourUpdater() {
        // get current number of hours
        var currentHour = moment().hours();

    }
} */

