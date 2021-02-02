// set variables
var current = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour =  moment().format('h')
var time = document.getElementById("hour1")

// const time1 =
// const time2 =
// const time3 =
// const time4 =
// const time5 =
// const time6 =
// const time7 =
// const time8 =
// const time9 =



//need to save text to the local storage
//need click event for savebtn
      
 
 $('.btn').click(function() {
   
    localStorage.setItem("textarea", + value);
 })

 //need to append current to currentday
$('#currentDay').append(current);


//need function to check current time and chang textarea color past/present/future
var changeColor = function() {
   if(time > currentHour){
      $('.text').css('.past');
      
   }
}