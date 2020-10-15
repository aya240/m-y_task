function time() {
    "use strict";
    var time = document.getElementById("time");
    time.innerHTML = new Date();
}

function n() {
    "use strict";
    var name = document.getElementById("name");
    name.innerHTML = "Aya Mohsen";
}


function message() {
    "use strict";
    var message = document.getElementById("message");
alert("you write" + "  " + message.value);
}
