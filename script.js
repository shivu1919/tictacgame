let currentplayer = "O"
let w = document.getElementById('winner')
let game = true


function Cell0(){
    let d = document.getElementById('cell0') 
    
    if(game==true){
        if(currentplayer=="O"){
            d.innerHTML="O"
            CheckWin()
            currentplayer="X"
        }
        else{
            d.innerHTML="X"
            CheckWin()
            currentplayer="O"
        }
    }

    


}

function Cell1(){
    let d = document.getElementById('cell1')
    if(currentplayer=="O"){
        d.innerHTML="O"
        currentplayer="X"
    }
    else{
        d.innerHTML="X"
        currentplayer="O"
    }
}

function Cell2(){
    let d = document.getElementById('cell2')

    if(game==true){
        if(currentplayer=="O"){
            d.innerHTML="O"
            CheckWin()
            currentplayer="X"
        }
        else{
            d.innerHTML="X"
            CheckWin()
            currentplayer="O"
        }

    }

   
}

function Cell3(){
    let d = document.getElementById('cell3')

    if(game==true){
        if(currentplayer=="O"){
            d.innerHTML="O"
            CheckWin()
            currentplayer="X"
        }
        else{
            d.innerHTML="X"
            CheckWin()
            currentplayer="O"
        }
    }

    
}

function Cell4(){
    let d = document.getElementById('cell4')

    if(game==true){
        if(currentplayer=="O"){
            d.innerHTML="O"
            CheckWin()
            currentplayer="X"
        }
        else{
            d.innerHTML="X"
            CheckWin()
            currentplayer="O"
        }
    }

    
}

function Cell5(){
    let d = document.getElementById('cell5')
    if(game==true){
        if(currentplayer=="O"){
            d.innerHTML="O"
            CheckWin()
            currentplayer="X"
        }
        else{
            d.innerHTML="X"
            CheckWin()
            currentplayer="O"
        }
    }

}

function Cell6(){
    let d = document.getElementById('cell6')
    if(game==true){
        if(currentplayer=="O"){
            d.innerHTML="O"
            CheckWin()
            currentplayer="X"
        }
        else{
            d.innerHTML="X"
            CheckWin()
            currentplayer="O"
        }
    }

}

function Cell7(){
    let d = document.getElementById('cell7')
    if(game==true){
        if(currentplayer=="O"){
            d.innerHTML="O"
            CheckWin()
            currentplayer="X"
        }
        else{
            d.innerHTML="X"
            CheckWin()
            currentplayer="O"
        }
    }

}

function Cell8(){
    let d = document.getElementById('cell8')
    if(game==true){
        if(currentplayer=="O"){
            d.innerHTML="O"
            CheckWin()
            currentplayer="X"
        }
        else{
            d.innerHTML="X"
            CheckWin()
            currentplayer="O"
        }
    }

}


function CheckWin(){
    let c0 = document.getElementById('cell0').innerHTML
    let c1 = document.getElementById('cell1').innerHTML
    let c2 = document.getElementById('cell2').innerHTML
    let c3 = document.getElementById('cell3').innerHTML
    let c4 = document.getElementById('cell4').innerHTML
    let c5 = document.getElementById('cell5').innerHTML
    let c6 = document.getElementById('cell6').innerHTML
    let c7 = document.getElementById('cell7').innerHTML
    let c8 = document.getElementById('cell8').innerHTML

    if((c0==currentplayer&&c1==currentplayer&&c2==currentplayer) || (c3==currentplayer&&c4==currentplayer&&c5==currentplayer)||(c6==currentplayer&&c7==currentplayer&&c8==currentplayer) || (c0==currentplayer&&c3==currentplayer&&c6==currentplayer)|| (c1==currentplayer&&c4==currentplayer&&c7==currentplayer)|| (c2==currentplayer&&c5==currentplayer&&c8==currentplayer)|| (c0==currentplayer&&c4==currentplayer&&c8==currentplayer)||(c2==currentplayer&&c4==currentplayer&&c6==currentplayer)){
        w.innerHTML= currentplayer + " is the winner"
        game=false
    }

   
}







function Restart(){
    window.location="index.html";
}