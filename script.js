let a;
let b;
let c;

document.getElementById("sum").onclick = function(){
    a = document.getElementById('a').value;
    a = Number(a);
    b = document.getElementById('b').value;
    b = Number(b);
    c = a + b;
    
    document.getElementById('countlabel').innerHTML = c;
}

document.getElementById("resta").onclick = function(){
    a = document.getElementById('a').value;
    a = Number(a);
    b = document.getElementById('b').value;
    b = Number(b);
    c = a - b;
    
    document.getElementById('countlabel').innerHTML = c;
}