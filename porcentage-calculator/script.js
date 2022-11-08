function pcdn(){
    let pc = document.querySelector("#pcdn1").value
    let num = document.querySelector("#pcdn2").value
    let x = num/100*pc
    
    if(document.querySelector("#pcdn1").classList[0] == "error"){
        document.querySelector("#pcdn1").classList.remove("error")
        document.querySelector("#pcdn2").classList.remove("error")
    }

    if((pc == 0 || num == 0) && document.querySelector("#pcdn1").classList[0] != "error"){
        document.querySelector("#pcdn1").classList.add("error")
        document.querySelector("#pcdn2").classList.add("error")
        return
    }

    document.querySelector("#result1").innerHTML = x
}


function vdn(){
    let n1 = document.querySelector("#vdn1").value
    let n2 = document.querySelector("#vdn2").value
    let x = n1/(n2/100)

    if(document.querySelector("#vdn1").classList[0] == "error"){
        document.querySelector("#vdn1").classList.remove("error")
        document.querySelector("#vdn2").classList.remove("error")
    }

    if((n2 == 0 || n1 == 0) && document.querySelector("#vdn1").classList[0] != "error"){
        document.querySelector("#vdn1").classList.add("error")
        document.querySelector("#vdn2").classList.add("error")
        return
    }


    x = x + '%'
    document.querySelector("#result2").innerHTML = x
}

function pcup(){
    let num = document.querySelector("#pcup1").value
    let pc = document.querySelector("#pcup2").value
    let x = num/100*pc
    
    if(document.querySelector("#pcup1").classList[0] == "error"){
        document.querySelector("#pcup1").classList.remove("error")
        document.querySelector("#pcup2").classList.remove("error")
    }

    if((num == 0 || pc == 0) && document.querySelector("#pcup1").classList[0] != "error"){
        document.querySelector("#pcup1").classList.add("error")
        document.querySelector("#pcup2").classList.add("error")
        return
    }

    x = parseFloat(x)+parseFloat(num)

    document.querySelector("#result3").innerHTML = x
}

function pcd(){
    let num = document.querySelector("#pcd1").value
    let pc = document.querySelector("#pcd2").value
    let x = num/100*pc
    
    if(document.querySelector("#pcd1").classList[0] == "error"){
        document.querySelector("#pcd1").classList.remove("error")
        document.querySelector("#pcd2").classList.remove("error")
    }

    if((num == 0 || pc == 0) && document.querySelector("#pcd1").classList[0] != "error"){
        document.querySelector("#pcd1").classList.add("error")
        document.querySelector("#pcd2").classList.add("error")
        return
    }

    num = parseFloat(num) - parseFloat(x)

    document.querySelector("#result4").innerHTML = num
}

function atpu(){
    let n1 = document.querySelector("#atpu1").value
    let n2 = document.querySelector("#atpu2").value

    if(document.querySelector("#atpu1").classList[0] == "error"){
        document.querySelector("#atpu1").classList.remove("error")
        document.querySelector("#atpu2").classList.remove("error")
    }

    if((n2 == 0 || n1 == 0) && document.querySelector("#atpu1").classList[0] != "error"){
        document.querySelector("#atpu1").classList.add("error")
        document.querySelector("#atpu2").classList.add("error")
        return
    }

    let v = n2-n1

    let x = v/(n1/100)

    x = x + '%'
    document.querySelector("#result5").innerHTML = x
}

function atpd(){
    let n1 = document.querySelector("#atpd1").value
    let n2 = document.querySelector("#atpd2").value

    if(document.querySelector("#atpd1").classList[0] == "error"){
        document.querySelector("#atpd1").classList.remove("error")
        document.querySelector("#atpd2").classList.remove("error")
    }

    if((n2 == 0 || n1 == 0) && document.querySelector("#atpd1").classList[0] != "error"){
        document.querySelector("#atpd1").classList.add("error")
        document.querySelector("#atpd2").classList.add("error")
        return
    }

    let v = n1-n2

    let x = v/(n1/100)

    x = x + '%'
    document.querySelector("#result6").innerHTML = x
}