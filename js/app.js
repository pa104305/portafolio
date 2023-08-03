const list = document.getElementById("burger-icon");
const look = document.getElementById("options");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
let active = false;

if(window.innerWidth <= 767){
    list.addEventListener("click",() => {deploy();},false);
    link1.addEventListener("click", () => {active=true, deploy()},false);
    link2.addEventListener("click", () => {active=true, deploy()},false);
}

function deploy(){
    if(active == false){
        look.style.display = "flex";
        active = true;
        look.style.animation = "1s linear looked";
        document.querySelector("body").style.overflow = "hidden";
        changeBurguerIcon();
    }else{
        look.style.animation = "1s linear lookedr";
        setTimeout(() => {look.style.display = "none";}, 900)
        active = false;
        document.querySelector("body").style.overflow = "auto";
        changeBurguerIcon();
    }
}

function changeBurguerIcon(){
    const hide = document.getElementById('two');
    const one = document.getElementById('one');
    const two = document.getElementById('three');
    if(active == true){
        hide.style.background = "transparent";
        one.style.animation = "0.5s linear x1"; one.style.rotate = "45deg";one.style.width = "16vw"; one.style.top = "3vh";
        two.style.animation = "0.5s linear x2"; two.style.rotate = "315deg";two.style.width = "16vw";
    }else{
        hide.style.background = "#333";
        one.style.animation = "0.5s linear x1r"; one.style.rotate = "0deg";one.style.width = "8vw"; one.style.top = "0"
        two.style.animation = "0.5s linear x2r"; two.style.rotate = "0deg";two.style.width = "8vw";
    }
}
