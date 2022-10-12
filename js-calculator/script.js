function add(n){
    document.getElementById('operation').innerHTML += n
    calc()
}

function calc(){
    document.getElementById('result').innerHTML = eval(document.getElementById('operation').innerHTML)
}

function equal(){
    document.getElementById('operation').innerHTML = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = ''
}