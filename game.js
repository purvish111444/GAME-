//jay mahakal
//shree mahakali maa
let userscore=0;
let comscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message")
const usersc= document.querySelector("#you");
const comsc= document.querySelector("#comp");
const drawgame=()=>{
    
    msg.innerText="draw game";
    msg.style.backgroundColor="black";
}
const gen_comchoice=()=>{
    const options=["rock","paper","scissors"];
    //Math.rendoms(options);  //remdoms is for chose rendom choices in 0 to 1 therefore we multiply with  3 therefore our result is in 0 to 2 
   const remdomindex=Math.floor(Math.random()*3)// to remove desimulus from number
   return options[remdomindex];
}
const showwinner=(userwin,userchoice,comchoice)=>{
     if(userwin){
        userscore++;
        usersc.innerText=userscore;
        msg.innerText=`You win ! your ${userchoice} beats ${userchoice} `;
        msg.style.backgroundColor="green";

     }else{
        comscore++;
        comsc.innerText=comscore;
        msg.innerText=`You lose !${userchoice} beats your  ${userchoice} `;
        msg.style.backgroundColor="red";
     }
}
const playgame=(userchoice)=>{
    
    const comchoice= gen_comchoice();
    
     if(userchoice===comchoice){
         drawgame();
     }
     else{
        let userwin=true;
        if(userchoice==="rock"){
            //paper,scissors
            userwin=comchoice=="paper" ? false : true;
            //jo computer paper aave to jiti jase nahi to hari jase

        }
        else if(userchoice==="paper"){
            //rock,scissors
            userwin=comchoice=="scissors"? false : true;
        
        }
        else{
            //rock,paper
            userwin=comchoice==="rock"? false : true;
        }
        showwinner(userwin,userchoice,comchoice);
     }
    
}
choices.forEach((choice)=>{
   
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
    playgame(userchoice);
    });
});


