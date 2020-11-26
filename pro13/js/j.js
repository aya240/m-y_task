function add() {
    "use strict";
    var a = document.getElementById("one"),
        b = document.getElementById("two");
    var d = Number(a.value) + Number(b.value);
    if (isNaN(a.value) || isNaN(b.value))
        {
          document.getElementById("p").innerHTML = "Error .....please enter number";
           
        }
    else
        {
            
            document.getElementById("p").innerHTML = "answer is =" + d;       
        }
    
}




function pic()
{
    "use strict";
    var g = document.getElementById("gg");
    switch(g.value){
        case "girl":
            document.getElementById("bb").innerHTML = '<img src="img/a.jpg" width=300px height=200px/>' ; 
            break;
        
         case "boy":
            document.getElementById("bb").innerHTML ='<img src="img/b.jpg" width=300px height=200px/>' ; 
            break;
        
         case "heart":
            document.getElementById("bb").innerHTML ='<img src="img/c.jpg" width=300px height=200px/>' ; 
            break;
         
         case "house":
            document.getElementById("bb").innerHTML ='<img src="img/d.jpg" width=300px height=200px/>' ; 
            break;
        default:
            document.getElementById("bb").innerHTML ="sorry";
            break;
            
    }
    
            
          
    
}


