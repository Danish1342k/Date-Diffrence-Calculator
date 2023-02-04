// math.floor is a function that takes fist value every time
// example we have var a = math.floor(5.9)
// if we print document.write a
// it print 5


// math.abs returns the absolute value of a number
// example we have var a = math.abs(-5)
// if we print document.write a
// it print 5

function calculateDifference() {
    var start = new Date(document.getElementById("start").value);
    var end = new Date(document.getElementById("end").value);
    var difference = Math.abs(end.getTime() - start.getTime());//create variable difference to calculate milliseconds since January 1, 1970,
    var days = Math.floor(difference / (1000 * 3600 * 24)); //finds days milisecond
    var years = Math.floor(days / 365);//days divid by year i.e 365
    var months = Math.floor(days / 30);//days divid by month i.e 30
    var hours = Math.floor(difference / (1000 * 3600));// difference varible where we find millisecond divide by hour
    // which is 1000 milisecond is 1 second & 3600 second is 1 hour 
    var minutes = Math.floor(difference / (1000 * 60));
    var seconds = Math.floor(difference / 1000);

    document.getElementById("result").innerHTML = "The difference is: " + years + " years, " + months + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds.";
}



//         function calculateDifference() {
//   var start = new Date(document.getElementById("start").value);
//   var end = new Date(document.getElementById("end").value);

//   var years = end.getFullYear() - start.getFullYear();
//   var months = end.getMonth() - start.getMonth();
//   var days = end.getDate() - start.getDate();
//   var hours = end.getHours() - start.getHours();
//   var minutes = end.getMinutes() - start.getMinutes();
//   var seconds = end.getSeconds() - start.getSeconds();

//   document.getElementById("result").innerHTML = "The difference is: " + years + " years, " + months + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds";
// }

        // function calculateDifference() {
        //     var start = new Date(document.getElementById("start").value);
        //     var end = new Date(document.getElementById("end").value);
        //     var difference = end - start;

        //     var years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        //     difference -= years * (1000 * 60 * 60 * 24 * 365);

        //     var months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        //     difference -= months * (1000 * 60 * 60 * 24 * 30);

        //     var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        //     difference -= days * (1000 * 60 * 60 * 24);

        //     var hours = Math.floor(difference / (1000 * 60 * 60));
        //     difference -= hours * (1000 * 60 * 60);

        //     var minutes = Math.floor(difference / (1000 * 60));
        //     difference -= minutes * (1000 * 60);

        //     var seconds = Math.floor(difference / 1000);

        //     document.getElementById("result").innerHTML = "The diffrent between are: " + years + " years, " + months + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds";
        // }