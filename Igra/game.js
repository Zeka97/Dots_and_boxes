const canvas = document.querySelector('canvas');
console.log(canvas)


const objekat = JSON.parse(localStorage.getItem('objekat'));
document.getElementById('player1').innerHTML = objekat.igrac1;
document.getElementById('player2').innerHTML = objekat.igrac2;



let n = objekat.dimenzije;

if (n == 8){
    var brojboxova = 21;
}
else if(n == 10){
    var brojboxova = 37;
}
else if(n == 12){
    var brojboxova = 57;
}
else{
    var brojboxova = 81;
}

canvas.width = n*55;
canvas.height = n*55;

console.log(objekat);

var c = canvas.getContext('2d');
var niz1 = []
var nizlinija = []
console.log(canvas.width/2);
var i;
var x = (canvas.width/2)-25
var y = 50
var k = (canvas.width/2)-25
var brojac = 2;
var l = 0;
var brojac2=50;
var igrac1 = true;
var igrac1pts = 0
var igrac2pts = 0

console.log(objekat.igrac1);
console.log(objekat.igrac2);

document.getElementById('player1pts').innerHTML = igrac1pts;
document.getElementById('player2pts').innerHTML = igrac2pts;


function BoxmiddleBottom(x,y,size){
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.top = y;
    this.left = x;
    this.right = x + size;
    this.bottom = y+size;
    this.numOfSideSelected=0;
    this.owner=null;
    this.sideTop = { owner: null, isSelected: false };
    this.sideLeft = { owner: null, isSelected: false };
    this.sideRight = { owner: null, isSelected: false };
    this.sideBot = { owner: null, isSelected: true };
}

function BoxTop(x,y,size){
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.top = y - size;
    this.left = x;
    this.right = x + size;
    this.bottom = y;
    this.numOfSideSelected=0;
    this.owner=null;
    this.sideTop = { owner: null, isSelected: true };
    this.sideLeft = { owner: null, isSelected: false };
    this.sideRight = { owner: null, isSelected: false };
    this.sideBot = { owner: null, isSelected: false };
}

function BoxLeft(x,y,size){
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.top = y - size;
    this.left = x;
    this.right = x + size;
    this.bottom = y;
    this.numOfSideSelected=0;
    this.owner=null;
    this.sideTop = { owner: null, isSelected: false };
    this.sideLeft = { owner: null, isSelected: true };
    this.sideRight = { owner: null, isSelected: false };
    this.sideBot = { owner: null, isSelected: false };
}
function BoxRight(x,y,size){
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.top = y - size;
    this.left = x;
    this.right = x + size;
    this.bottom = y;
    this.numOfSideSelected=0;
    this.owner=null;
    this.sideTop = { owner: null, isSelected: false };
    this.sideLeft = { owner: null, isSelected: false };
    this.sideRight = { owner: null, isSelected: true };
    this.sideBot = { owner: null, isSelected: false };
}


function BoxLeftTop(x,y,size){
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.top = y - size;
    this.left = x;
    this.right = x + size;
    this.bottom = y;
    this.numOfSideSelected=0;
    this.owner=null;
    this.sideTop = { owner: null, isSelected: true };
    this.sideLeft = { owner: null, isSelected: true };
    this.sideRight = { owner: null, isSelected: false };
    this.sideBot = { owner: null, isSelected: false };
}
function BoxLeftBottom(x,y,size){
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.top = y;
    this.left = x;
    this.right = x + size;
    this.bottom = y+size;
    this.numOfSideSelected=0;
    this.owner=null;
    this.sideTop = { owner: null, isSelected: false };
    this.sideLeft = { owner: null, isSelected: true };
    this.sideRight = { owner: null, isSelected: false };
    this.sideBot = { owner: null, isSelected: true };
}
function BoxBottom(x,y,size){
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.top = y;
    this.left = x;
    this.right = x + size;
    this.bottom = y+size;
    this.numOfSideSelected=0;
    this.owner=null;
    this.sideTop = { owner: null, isSelected: false };
    this.sideLeft = { owner: null, isSelected: false };
    this.sideRight = { owner: null, isSelected: false };
    this.sideBot = { owner: null, isSelected: false };
}

function Box(x, y, size) {
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.top = y - size;
    this.left = x;
    this.right = x + size;
    this.bottom = y;
    this.numOfSideSelected=0;
    this.owner=null;
    this.sideTop = { owner: null, isSelected: false };
    this.sideLeft = { owner: null, isSelected: false };
    this.sideRight = { owner: null, isSelected: false };
    this.sideBot = { owner: null, isSelected: false };
}
function BoxRightTop(x,y,size){
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.top = y - size;
    this.left = x;
    this.right = x + size;
    this.bottom = y;
    this.numOfSideSelected=0;
    this.owner=null;
    this.sideTop = { owner: null, isSelected: true };
    this.sideLeft = { owner: null, isSelected: false };
    this.sideRight = { owner: null, isSelected: true };
    this.sideBot = { owner: null, isSelected: false };
}
function boxRightBottom(x,y,size){
    this.x = x;
    this.y = y;
    this.w = size;
    this.h = size;
    this.top = y;
    this.left = x;
    this.right = x + size;
    this.bottom = y+size;
    this.numOfSideSelected=0;
    this.owner=null;
    this.sideTop = { owner: null, isSelected: false };
    this.sideLeft = { owner: null, isSelected: false };
    this.sideRight = { owner: null, isSelected: true };
    this.sideBot = { owner: null, isSelected: true };
}
function endGame(){
    window.location.href= '../Rezultat/rezultat.html';
}
function restart(){
    window.location.reload();
}

function forfeit() {
    if(igrac1 == true){
        objekat.pobjednik = objekat.igrac2;
        localStorage.setItem("objekat",JSON.stringify(objekat))
    }
    else {
        objekat.pobjednik = objekat.igrac1;
        localStorage.setItem("objekat",JSON.stringify(objekat))
    }
    window.location.href= '../Rezultat/rezultat.html';
}


function startGame(){
    for(i = 0; i < n;i++){
        c.beginPath();
            if(i == 0){
                c.beginPath()
                c.fillStyle="red";
                c.fillRect(k,y,50,50);
                c.stroke();
            }
            if(i >=1 && i< n/2){
                c.beginPath()
                    c.rect(k+50,y,1,-50);
                    c.rect(x,y,1,-50);
                    c.rect(k,y,50,1);
                    c.rect(x+50,y,-50,1);
                c.stroke();
                    
                        l = 0;
                        brojac2=0;
                        while(l < brojac){
                            console.log(123);
                            c.beginPath();
                            c.arc(k+50+brojac2,y,2,0,2*Math.PI);
                            c.stroke();
                            if (l == 0){
                                niz1.push(new BoxLeftTop(k+50+brojac2,y,50))
                            }
                            else if(l == 1 && i == 2){
                                niz1.push(new BoxTop(k+50+brojac2,y,50))
                            }
                            else if (l == brojac-2){
                                niz1.push(new BoxRightTop(k+50+brojac2,y,50))
                            }
                            else{
                                niz1.push(new Box(k+50+brojac2,y,50))
                            }
                            l+=1;
                            brojac2+=50;
                        }
                        if (i < n/2-1){
                            brojac+=2;
                        }
                console.log(brojac);
                c.stroke();
            }
            if (i == n/2){
                c.beginPath();
                c.fillStyle = "yellow"
                c.fillRect(k+50,y-50,50,50);
                c.stroke();
                c.beginPath();
                c.fillStyle="red"
                c.fillRect(x,y-50,-50,50);
                c.stroke();
                c.beginPath();
                c.rect(k+50,y,50,1);
                c.rect(k+100,y,1,50);
                c.rect(x,y,-50,1);
                c.rect(x-50,y,1,50);
                c.stroke();
                l = 0;
                brojac2 = 0;
                while(l < brojac){
                    c.beginPath();
                    c.arc(k+ 100 + brojac2,y,2,0,2*Math.PI);
                    c.stroke();
                    if(l == 0){
                        niz1.push(new BoxLeft(k+100+brojac2,y,50))
                    }
                    else if(l == brojac-2){
                        console.log(brojac,l)
                        niz1.push(new BoxRight(k+100+brojac2,y,50))
                    }
                    else{
                        niz1.push(new Box(k+100+brojac2,y,50))
                    }
                    l+=1;
                    brojac2+=50;
                }
                
            }
                
            if(i >= n/2 && i < n-1){
                c.beginPath()
                    c.rect(k+50,y,50,1);
                    c.rect(k+100,y,1,50);
                    c.rect(x,y,-50,1);
                    c.rect(x-50,y,1,50)
                c.stroke();
                l = 0;
                brojac2=0;
                while(l < brojac){
                    c.beginPath();
                    c.arc(k+100+brojac2,y,2,0,2*Math.PI);
                    c.stroke();
                    if(l == 0){
                        niz1.push(new BoxLeftBottom(k+100+brojac2,y,50))
                    }
                    else if(l == 1 && i == n-3){
                        niz1.push(new BoxmiddleBottom(k+100+brojac2,y,50))
                    }
                    else if(l == brojac-2){
                        niz1.push(new boxRightBottom(k+100+brojac2,y,50))
                    }
                    else{
                        niz1.push(new BoxBottom(k+100+brojac2,y,50))
                    }
                    l+=1;
                    brojac2+=50;
                }
                brojac-=2;
                c.stroke();
                
            }
            if(i == n-1){
                c.beginPath()
                c.fillStyle ="yellow"
                c.fillRect(k+50,y,50,-50);
                c.stroke();
            }

           
        if(i < n/2){
            x+=50;
            y+=50;
            k-=50;  
        }
        else{
            x-=50;
            y+=50;
            k+=50;

        }
    }
}


    addEventListener('click',(event) =>{
        let a = 9000;
        let pocetnavrijednost = 9000;
        let c0 = 0;
        let c1 = 0;
        let c2 = 0;
        let c3 = 0;
        let ispunjenkvadrat = false
        
        for (i = 0; i < niz1.length; i++){
            /*     c0 = 960 c1 = 370      */
                if(Math.sqrt(Math.pow(niz1[i].x - event.offsetX,2) + Math.pow(niz1[i].y - event.offsetY,2)) <= a){
                    c0 = niz1[i].x;
                    c1 = niz1[i].y;
                    a = Math.sqrt(Math.pow(niz1[i].x - event.offsetX,2) + Math.pow(niz1[i].y - event.offsetY,2))
                }
           
        }

        for(i = 0 ; i < niz1.length; i++){
            if(Math.sqrt(Math.pow(niz1[i].x - event.offsetX,2) + Math.pow(niz1[i].y - event.offsetY,2)) <= pocetnavrijednost &&  Math.sqrt(Math.pow(niz1[i].x - event.offsetX,2) + Math.pow(niz1[i].y - event.offsetY,2)) != a ){
                c2 = niz1[i].x;
                c3 = niz1[i].y;
                pocetnavrijednost = Math.sqrt(Math.pow(niz1[i].x - event.offsetX,2) + Math.pow(niz1[i].y - event.offsetY,2));
            }
        }
        if (c1 > c3){
            temp = c1
            c1 = c3
            c3 = temp
        }
        if(c0 > c2){
            temp = c0
            c0 = c2
            c2 = temp
        }

        ispunjenkvadrat = false
        for(i = 0; i < niz1.length; i++){
            if(c0 == c2 && niz1[i].x == c0){
                if (niz1[i].top == c1 && niz1[i].bottom == c3){
                    niz1[i].sideLeft = {
                        owner:igrac1,
                        isSelected:true
                    }
                    niz1[i].numOfSideSelected+=1
                } 
            }
            else if(c0 == c2 && c0 == niz1[i].x + 50){
                if (niz1[i].top == c1 && niz1[i].bottom == c3){
                    niz1[i].sideRight = {
                        owner:igrac1,
                        isSelected:true
                    }
                }
                niz1[i].numOfSideSelected+=1 
            }

            if(niz1[i].x == c0  && niz1[i].right == c2){
                if(c1 == c3 && niz1[i].top == c1){
                    niz1[i].sideTop = {
                        owner:igrac1,
                        isSelected:true
                    }
                    niz1[i].numOfSideSelected+=1
                }
            else if(niz1[i].x == c0 && niz1[i].bottom == c1){
                    niz1[i].sideBot = {
                        owner:igrac1,
                        isSelected:true
                    }
                    niz1[i].numOfSideSelected+=1
                }
            }
            if(niz1[i].sideTop.isSelected == true && niz1[i].sideBot.isSelected == true && niz1[i].sideLeft.isSelected == true && niz1[i].sideRight.isSelected == true && !niz1[i].owner){
                if(igrac1){
                    niz1[i].owner = 'igrac1'
                    igrac1pts+=1
                }
                else{
                    niz1[i].owner = 'igrac2'
                    igrac2pts+=1
                }
                
                if(niz1[i].owner == 'igrac1'){
                    c.fillStyle = "yellow"
                }
                else{
                    c.fillStyle = "red"
                }
                c.fillRect(niz1[i].x + 2,niz1[i].top + 2,46,46);
                ispunjenkvadrat = true
                document.getElementById('player1pts').innerHTML = igrac1pts;
                document.getElementById('player2pts').innerHTML = igrac2pts;
                
            }

                
        }
        console.log(niz1)
        let linijapostoji = false
        for(i = 0; i < nizlinija.length; i++){
            if (nizlinija[i][0] == c0 && nizlinija[i][1] == c1 && nizlinija[i][2] == c2 && nizlinija[i][3] == c3){
                linijapostoji = true
            }
        }
        console.log(event);
        c.beginPath()
        console.log(c0,c1,c2,c3);

        console.log(linijapostoji);
        if(linijapostoji == false){
            if(c0 == c2 || c1 == c3)
            {
                c.moveTo(c0,c1);
                c.lineTo(c2,c3);
                if (igrac1){
                    c.strokeStyle = "yellow";
                }
                else{
                    c.strokeStyle="red";
                }
                c.stroke();
                if (!ispunjenkvadrat){
                    igrac1 = !igrac1;
                }
            }

            console.log(c0,c1,c2,c3);
            nizlinija.push([c0,c1,c2,c3])
        }
        console.log(nizlinija);

        
        console.log(igrac1pts + igrac2pts);
        if((igrac1pts + igrac2pts) == brojboxova){
            if (igrac1pts > igrac2pts) {
                let pobjednik = objekat.igrac1;
                objekat.pobjednik = objekat.igrac1;
                localStorage.setItem("objekat",JSON.stringify(objekat))
            }
            else if(igrac2pts > igrac1pts){
                let pobjednik = objekat.igrac2;
                console.log(objekat.igrac2);
                objekat.pobjednik = objekat.igrac2
                localStorage.setItem("objekat",JSON.stringify(objekat))

            }
            endGame();
        }

    })

startGame()
