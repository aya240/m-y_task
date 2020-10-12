document.getElementById("v").innerHTML = "Number-1 + Number-2 =";
function fun() {
    "use strict";
    var a = document.getElementById("f"),
        b = document.getElementById("s");
    var d = Number(a.value) + Number(b.value);
    if (isNaN(a.value) || isNaN(b.value))
        {
          document.getElementById("v").innerHTML = "Error .....please enter number";
           
        }
    else
        {
            
            document.getElementById("v").innerHTML = "Number-1 + Number-2 =" + d;       
        }
    
}
