"use strict"; 

const menu = document.querySelector(".button");
const dropdowns = document.querySelectorAll(".main-menu");

menu.addEventListener("click",()=>{
    for(const dropdown of dropdowns){
        dropdown.style.display="block";
    }
});



    
       
menu.addEventListener("blur",()=>{
     for(const dropdown of dropdowns){
        dropdown.style.display="";
    }

    setTimeout(()=>{
        dropdown.style.display='';
    },2000);
});

