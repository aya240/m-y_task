//first div
function add()      //first function add two numbers
{
    "use strict";
    var num1 = document.getElementById("n1"),
        num2 = document.getElementById("n2");
    var d = Number(num1.value) + Number(num2.value);
    if (isNaN(num1.value) || isNaN(num2.value))
        {
          document.getElementById("p").innerHTML = "Error .....please enter number";
        }
    else
        {
            document.getElementById("p").innerHTML = "answer is =" + d;       
        }
}

//second div
function pic()  //picture function
{
    "use strict";
    var word = document.getElementById("input").value;
    word = word.toLowerCase();
    switch(word){
        case "girl":
            document.getElementById("picture").innerHTML = '<img src="img/a.jpg" width=300px height=200px/>' ; 
            break;
         case "boy":
            document.getElementById("picture").innerHTML ='<img src="img/b.jpg" width=300px height=200px/>' ; 
            break;
         case "heart":
            document.getElementById("picture").innerHTML ='<img src="img/c.jpg" width=300px height=200px/>' ; 
            break;
         case "house":
            document.getElementById("picture").innerHTML ='<img src="img/d.jpg" width=300px height=200px/>' ; 
            break;
        default:
             document.getElementById("picture").innerHTML ="not found can you search ";
           
            document.getElementById("picture").innerHTML +="<a href='https://www.pexels.com/search//g.value'>here</a>";
            break;
    }
}


function ph()   //picture function with prompt
{
    "use strict";
    var zx = prompt(" what do you want");
     zx = zx.toLowerCase();
    switch(zx){
        case "girl":
            document.getElementById("picture").innerHTML = '<img src="img/a.jpg" width=300px height=200px/>' ; 
            break;
         case "boy":
            document.getElementById("picture").innerHTML ='<img src="img/b.jpg" width=300px height=200px/>' ; 
            break;
         case "heart":
            document.getElementById("picture").innerHTML ='<img src="img/c.jpg" width=300px height=200px/>' ; 
            break;
         case "house":
            document.getElementById("picture").innerHTML ='<img src="img/d.jpg" width=300px height=200px/>' ; 
            break;
        default:
            document.getElementById("picture").innerHTML +="<a href='http://google.com/search?q= " + m + "'>here</a>";
            break;
    }
}


//third div
function loop()  //for loop function
{
    "use strict";
    var i;
    var er = document.getElementById("en");
    if(isNaN(er.value))
    {
        document.getElementById("soo").innerHTML =  "please enter  number";
    }
    else
    {
                document.getElementById("soo").innerHTML =  "please wait 3 sec";
                setTimeout(function() {
                     "use strict";

                   for(i=1 ; i<=9 ; i++)
                {
                      document.getElementById("sa").innerHTML +=  i + "x" + er.value +"="+ i*er.value + "<br>";
                }
                } , 3000);
    }
}


function list()  //list functio
{
    "use strict";
       var lis = document.getElementById("an");
       document.getElementById("asa").innerHTML +=  "<li>"+ lis.value + "</li>";
}


function fff() 
{
    "use strict";
    var i=1;
    var err = document.getElementById("enn");
    if(isNaN(err.value))
    {
        document.getElementById("sx").innerHTML =  "please enter  number";
    }
    else
    {
              while( i<=err.value )
                {
                      document.getElementById("sx").innerHTML += "aa" + err.value +"mm" + "<br>";
                      i++;
                }
    }

}


function clean()
{
    "use strict";
    document.getElementById("enn").value = "";
      document.getElementById("sx").innerHTML = "";

}






