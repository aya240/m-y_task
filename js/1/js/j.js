function play() {
    "use strict";
    var a = prompt("2-write one of (name ,age ,job)");

    if (a === "name") {
        
        document.getElementById("am").innerHTML = "my name is aya";

     }
     else if (a === "age") {
        
        document.getElementById("am").innerHTML = "my age is 22";

     }
     else if (a === "job") {
        
        document.getElementById("am").innerHTML = "my job is web designer";

     }
    
   else
   {
       document.getElementById("am").innerHTML = "error";
     }
    
    
} 

