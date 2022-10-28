var array = [
    {}, {}, {},
    {}, {}, {},
    {}, {}, {}
]

function mark(id){
    if (array[id].sign == 'X' || array[id].sign == "O"){
        return
    }
    array[id].sign = 'X'
    document.getElementById(id).innerHTML = "X"

    let c = check()
    if (typeof(c)==='object'){
        gameover(c[0])
    }
    enemy()
}

function enemy(){
    let notmarked = []

    for (let i = 0; i<array.length; i++){
        if (array[i].sign == "X" || array[i].sign == "O"){
            continue
        }
        notmarked.push(i)
    }
    if (notmarked.length == 0){
        return
    }

    let opt
    notmarked.forEach(i => {
        array[i].sign = "O"
        let c = check()
        if (typeof(c) === "object"){
            opt = i
        }
        array[i].sign = undefined
    });
    if (typeof(opt)!="number"){
        opt = notmarked[~~(notmarked.length * Math.random())]
    }


    array[opt].sign = "O"
    document.getElementById(opt).innerHTML = "O"
    notmarked = []

    let c = check()
    if (typeof(c)==='object'){
        gameover(c[0])
    }
}

function check(){
    for (let i = 0; i<3; i++){
        //vertical
        if (array[i].sign != undefined && array[i].sign == array[i+3].sign && array[i].sign == array[i+6].sign){
            return [array[i].sign, 'V', i]
        }

        //horizontal
        if (array[i*3].sign != undefined && array[i*3].sign == array[i*3+1].sign && array[i*3].sign == array[i*3+2].sign){
            return [array[i*3].sign, 'H', i]
        }
    }

    //diagonal
    if (array[0].sign != undefined && array[0].sign == array[4].sign && array[0].sign == array[8].sign){
        return [array[0].sign, 'D', 0]
    }
    if (array[2].sign != undefined && array[2].sign == array[4].sign && array[2].sign == array[6].sign){
        return [array[2].sign, 'D', 1]
    }

    //draw
    for (let i=0; i<9; i++){
        if (array[i].sign==undefined){break}
        if (i==8){gameover("draw")}
    }
}

function gameover(winner){
    if (winner != "draw"){alert(winner+ ' wins!')}
    array = [
        {}, {}, {},
        {}, {}, {},
        {}, {}, {}
    ]
    for (let i=0; i<9; i++){
        document.getElementById(i).innerHTML = ""
    }
}