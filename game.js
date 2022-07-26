const time=document.querySelector(".time");
let btn=document.querySelector("#play");
let win=document.querySelector(".vic");
var stoptime=true;
var hour=0, seconds=0 ,minutes=0;
console.log(play);

btn.addEventListener("click",()=>{
    
        generate();
    
});

function generate(){
    let user_input=document.querySelector(".listitem");

    let butt=document.createElement("button");
    butt.className="but";
    butt.innerText="Submit";
    document.querySelector(".col").appendChild(butt);

    butt.addEventListener("click",()=>{
       if(user_input.value!=""){
           game();
           butt.disabled=true;
       }
       else{
           alert("Need input please");
       }
    });
    
}

function addtime(){

        if (stoptime==false)
        {
                seconds=parseInt(seconds); 
                minutes=parseInt(minutes);
                hour=parseInt(hour);

            seconds+=1;

                if(seconds==60)
                {
                    minutes+=1;
                    seconds=0;
                }

                if(minutes==60)
                {
                    hour+=1;
                    minutes=0;
                    seconds=0;
                }

                time.innerHTML=format(hour) + " : " + format(minutes) + " : " + format(seconds); 
                
                if(seconds>=30){
                    win.innerHTML="Time elapsed";
                    win.classList.add("tie");
                    stoptimer();
                }
         }
         setTimeout("addtime()" , 1000); 
}

function format(data) {
    return(data ?(data<=9? "0"+data:data):"00");
}

function calltimer(){  
  if(stoptime==true)
    {
        stoptime=false;
        addtime();
    }
 }

 function game(){
        let userchoice=document.querySelector(".listitem").value;
        let computerchoices=[1,2,3,4,5,6,7,8,9]; 
        let n = computerchoices.length;
        console.log(n);
        let computerchoice=computerchoices[Math.floor(Math.random()*n)];

        if(userchoice==computerchoice && seconds<=30){
            win.innerHTML= "User wins";
            win.classList.add("win");
        stoptimer();
        }
        else if(userchoice!==computerchoice && seconds<=30){
            win.innerHTML= "Computer wins , the number was : " + `${computerchoice}`;
            win.classList.add("lose");
		stoptimer();
		//win.innerHTML= "";
		//addtime();
        
        }
 }
 
 function stoptimer() {
        if(stoptime==false)
        {
            stoptime=true
        }
        play.disabled=true;
}
