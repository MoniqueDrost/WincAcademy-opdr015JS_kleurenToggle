let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }
    toggleNavStatus = true;
}
else if (toggleNavStatus === true) {
    getSidebar.style.width = "0px";
    

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "0";
    }
    getSidebarUl.style.visibility = "hidden";

    toggleNavStatus = false;
}
}
const body1 = document.querySelector("body");

const homeButton = document.querySelector(".home");
const redButton = document.querySelector(".turnRed");
const orangeButton = document.querySelector(".turnOrange");
const purpleButton = document.querySelector(".turnPurple");
const greenButton = document.querySelector(".turnGreen");


const turnHome = () => {
    body1.style.backgroundColor = "lightgrey";
    toggleNavStatus = true;
    toggleNav();
    document.querySelector(".kleur").innerText = "";
    };
   
homeButton.addEventListener("click", turnHome);

const turnBodyRed = () => {
 body1.style.backgroundColor = "red";
 toggleNavStatus = true;
 toggleNav();
 document.querySelector(".kleur").innerText = "Rood";
 document.querySelector(".kleur").style.color = "darkred";
};

redButton.addEventListener("click", turnBodyRed);

const turnBodyOrange = () => {
    body1.style.backgroundColor = "orange";
    toggleNavStatus = true;
    toggleNav();
    document.querySelector(".kleur").innerText = "Oranje";
    document.querySelector(".kleur").style.color = "darkorange";
   };
   
orangeButton.addEventListener("click", turnBodyOrange);

   const turnBodyPurple = () => {
    body1.style.backgroundColor = "purple";
    toggleNavStatus = true;
    toggleNav();
    document.querySelector(".kleur").innerText = "Paars";
    document.querySelector(".kleur").style.color = "rgb(83,1,83)";
   };
   
purpleButton.addEventListener("click", turnBodyPurple);

   const turnBodyGreen = () => {
    body1.style.backgroundColor = "green";
    toggleNavStatus = true;
    toggleNav();
    document.querySelector(".kleur").innerText = "Groen";
    document.querySelector(".kleur").style.color = "darkgreen";
   };
   
greenButton.addEventListener("click", turnBodyGreen);

