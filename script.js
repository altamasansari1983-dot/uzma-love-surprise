/* ==================================
   CHAT INTRO ANIMATION
================================== */


const messages = document.querySelectorAll(".message");
const typing = document.getElementById("typing");

let chatIndex = 0;


function showChat(){

    if(chatIndex < messages.length){

        typing.classList.remove("hidden");


        setTimeout(()=>{

            typing.classList.add("hidden");

            messages[chatIndex].classList.remove("hidden");

            chatIndex++;

            showChat();

        },1200);


    }else{

        setTimeout(startReveal,1500);

    }

}


window.onload = ()=>{

    showChat();

};






/* ==================================
   MAGIC TRANSITION
================================== */


function startReveal(){


    const reveal=document.getElementById("magicReveal");
    const intro=document.getElementById("chatIntro");
    const main=document.getElementById("mainPage");


    reveal.style.opacity="1";


    setTimeout(()=>{


        intro.style.transition="1.5s";

        intro.style.opacity="0";


        setTimeout(()=>{


            intro.style.display="none";

            main.style.display="block";


            window.scrollTo(0,0);


        },1500);



    },2500);


}







/* ==================================
   LETTER OPENING + TYPING
================================== */


const letterBtn=document.getElementById("letterBtn");
const envelope=document.getElementById("envelope");
const letterText=document.getElementById("letterText");


const letterContent = `Dear Uzma,

You make life feel lighter, warmer, and more beautiful.

Your presence turns ordinary moments into something special.

This website is a small piece of my heart, made just for you.

Thank you for being you.
Thank you for existing in my world.

With all my love,

Altamas ❤️`;



let letterStarted=false;


letterBtn.onclick=()=>{

    envelope.scrollIntoView({
        behavior:"smooth"
    });


    setTimeout(()=>{

        envelope.classList.add("open");


        if(!letterStarted){

            letterStarted=true;

            typeLetter();

        }


    },700);


};



let letterIndex=0;


function typeLetter(){


    if(letterIndex < letterContent.length){

        letterText.innerHTML += letterContent.charAt(letterIndex);

        letterIndex++;


        setTimeout(typeLetter,45);


    }


}








/* ==================================
   CHOICE SECTION
================================== */


const choices=document.querySelectorAll(".choices button");
const answer=document.getElementById("answerBox");


choices.forEach(button=>{


    button.onclick=()=>{


        answer.style.transform="scale(.8)";

        answer.innerHTML=button.dataset.answer;


        setTimeout(()=>{

            answer.style.transition=".5s";
            answer.style.transform="scale(1)";

        },100);


    };


});








/* ==================================
   MEMORY SCROLL ANIMATION
================================== */


const cards=document.querySelectorAll(".reveal");


const observer=new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},{threshold:.2});



cards.forEach(card=>{

    observer.observe(card);

});








/* ==================================
   MUSIC CONTROL
================================== */


const music=document.getElementById("music");
const musicBtn=document.getElementById("musicBtn");


let playing=false;



musicBtn.onclick=()=>{


    if(!playing){


        music.volume=0;


        music.play();


        let volume=0;


        let fade=setInterval(()=>{


            if(volume<0.5){

                volume+=0.05;

                music.volume=volume;

            }else{

                clearInterval(fade);

            }


        },200);



        musicBtn.innerHTML="⏸ Pause";


        playing=true;



    }else{


        music.pause();

        musicBtn.innerHTML="🎵 Play";


        playing=false;


    }


};









/* ==================================
   FINAL SURPRISE EFFECT
================================== */


const surpriseBtn=document.getElementById("surpriseBtn");
const finalMessage=document.getElementById("finalMessage");



surpriseBtn.onclick=()=>{


    createHearts();


    finalMessage.style.display="block";


    finalMessage.scrollIntoView({

        behavior:"smooth"

    });


};





function createHearts(){


    for(let i=0;i<60;i++){


        let heart=document.createElement("div");


        heart.innerHTML="❤️";


        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.top="-20px";

        heart.style.fontSize=
        (15+Math.random()*30)+"px";


        heart.style.animation=
        "fall 3s linear";


        heart.style.zIndex="9999";



        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },3000);


    }


}







/* Dynamic heart falling animation */


const style=document.createElement("style");


style.innerHTML=`

@keyframes fall{

from{

transform:translateY(0) rotate(0deg);

opacity:1;

}


to{

transform:translateY(110vh) rotate(360deg);

opacity:0;

}

}

`;



document.head.appendChild(style);
