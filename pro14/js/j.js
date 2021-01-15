
function add () {
	 "use strict";
var num1 = document.getElementById("num1"),
      num2 = document.getElementById("num2"),
	  A = Number(num1.value) + Number(num2.value) ,
      total =document.getElementById("total");
if(isNaN(num1.value) || isNaN(num2.value)  ){
	prompt("number only");
}
else{
	total.innerHTML = "the plus of them is:" + A;
}
}

function pp() {
		 "use strict";
		var a= prompt("say something");
		document.getElementById("prompt").innerHTML += a ;

}

function time(){
		 "use strict";
		 document.getElementById("date").innerHTML = "<p>" + new Date() + "</p>";
}



function aa(){
		 "use strict";
var a = document.getElementById("as") ;
var b = a.value ;
var d = b.length;
var c = document.getElementById("qq") ;
c.innerHTML = d+1 ;

								}



function fun(){
		 "use strict";
var xx = document.getElementById("f");
      var   zz = document.getElementById("zx");
	  var aa = [];
		 var i ;
		 
for(i=0; i< xx.value ; i=i+1)
{
	aa[i]=	prompt("number"  +"  " +(i+1) + "  " + "is");
	zz . innerHTML += "<p>" + aa[i] + "</p>";


}
/*
for(i=0; i< xx.value ; i=i+1)
{
zz . innerHTML += "<p>" + aa[i] + "</p>";
}
*/

								}


