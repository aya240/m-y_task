function fun() {
    "use strict";
    var a = document.getElementById("an"),
        b = document.getElementById("am");
    var d = Number(a.value) / Number(b.value);
    if (isNaN(a.value) || isNaN(b.value))
        {
          document.getElementById("aq").innerHTML = "من فضلك ادخل رقم ............";
           
        }
    else
        {
            
            document.getElementById("aq").innerHTML = "من المحتمل ان تنهى هذا الكتاب خلال" + d + "يوم";        
        }
    
}
