let count1=0
let count2=0
let finalCounter=0
function firstDice()
{
    window.forDice1=Math.floor(Math.random()*6)+1;//Global Variable
    // var forDice1=Math.floor(Math.random()*6)+1;
    var dotSetA=document.querySelectorAll(".dota");
    for(var i=0;i<dotSetA.length;i++){
        dotSetA[i].classList.remove("dotshow");
    }
    if(forDice1===1)
    {
        for(var i=0;i<dotSetA.length;i++)
        {
            if(i != 4)
            {
                dotSetA[i].classList.add("dotshow");
            }
        }
    }
    if(forDice1===2)
    {
        for(var i=0;i<dotSetA.length;i++)
        {
            if(i != 0 && i!=8)
            {
                dotSetA[i].classList.add("dotshow");
            }
        }
    }
    if(forDice1===3)
    {
        for(var i=0;i<dotSetA.length;i++)
        {
            if(i != 0 && i!=4 && i!=8)
            {
                dotSetA[i].classList.add("dotshow");
            }
        }
    }
    
    if(forDice1===4)
    {
        for(var i=0;i<dotSetA.length;i++)
        {
            if(i != 0 && i!=2 && i!=6 && i!=8)
            {
                dotSetA[i].classList.add("dotshow");
            }
        }
    }
    if(forDice1===5)
    {
        for(var i=0;i<dotSetA.length;i++)
        {
            if(i != 0 && i!=2 && i!=4 && i!=6 && i!=8)
            {
                dotSetA[i].classList.add("dotshow");
            }
        }
    }
    if(forDice1===6)
    {
        for(var i=0;i<dotSetA.length;i++)
        {
            if(i != 0 && i!=1 && i!=2 && i!=6 && i!=7 && i!=8)
            {
                dotSetA[i].classList.add("dotshow");
            }
        }
    }
}
function secondDice()
{
    var forDice2=Math.floor(Math.random()*6)+1;
    var dotSetB=document.querySelectorAll(".dotb");
    for(var i=0;i<dotSetB.length;i++){
        dotSetB[i].classList.remove("dotshow");
    }
    if(forDice2===1)
    {
        for(var i=0;i<dotSetB.length;i++)
        {
            if(i != 4)
            {
                dotSetB[i].classList.add("dotshow");
            }
        }
    }
    if(forDice2===2)
    {
        for(var i=0;i<dotSetB.length;i++)
        {
            if(i != 0 && i!=8)
            {
                dotSetB[i].classList.add("dotshow");
            }
        }
    }
    if(forDice2===3)
    {
        for(var i=0;i<dotSetB.length;i++)
        {
            if(i != 0 && i!=4 && i!=8)
            {
                dotSetB[i].classList.add("dotshow");
            }
        }
    }
    
    if(forDice2===4)
    {
        for(var i=0;i<dotSetB.length;i++)
        {
            if(i != 0 && i!=2 && i!=6 && i!=8)
            {
                dotSetB[i].classList.add("dotshow");
            }
        }
    }
    if(forDice2===5)
    {
        for(var i=0;i<dotSetB.length;i++)
        {
            if(i != 0 && i!=2 && i!=4 && i!=6 && i!=8)
            {
                dotSetB[i].classList.add("dotshow");
            }
        }
    }
    if(forDice2===6)
    {
        for(var i=0;i<dotSetB.length;i++)
        {
            if(i != 0 && i!=1 && i!=2 && i!=6 && i!=7 && i!=8)
            {
                dotSetB[i].classList.add("dotshow");
            }
        }
    }
    annonceResult(forDice1,forDice2)

}
function annonceResult(x,y)
{
    if(x!=y ){
        finalCounter++;
    }
    if (x===y && finalCounter===0){finalCounter++;}
    if(x>y){count1++;document.querySelector(".plyr1").textContent=count1;}
    else if(x<y){count2++;document.querySelector(".plyr2").textContent=count2;}
    // else{document.querySelector(".result h1").textContent="Draw";}
    if(finalCounter%10===0)
    {
        if(count1>count2){document.querySelector(".result h1").textContent="Player 1 Wins by ("+count1+"-"+count2+")";}
        else if(count1<count2){count2++;document.querySelector(".result h1").textContent="Player 2 Wins by ("+count2+"-"+count1+")";}
        else if(count1===count2 && count1!=0){document.querySelector(".result h1").textContent="Draw ("+count2+"-"+count1+")";}
        count1=0;
        document.querySelector(".plyr1").textContent=count1;
        count2=0;
        document.querySelector(".plyr2").textContent=count2;
    }
}