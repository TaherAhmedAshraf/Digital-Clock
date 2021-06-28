

function clock(){
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    
    document.getElementById("hour").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;
}

var inteval = setInterval(clock, 1000)