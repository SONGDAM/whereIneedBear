"use strict"; 

const menu = document.querySelector(".button");
const dropdowns = document.querySelectorAll(".main-menu");


// menu.addEventListener("click",()=>{
//     for(const dropdown of dropdowns){
//         dropdown.style.display="block";
//         console.log("")
//     }
// });

menu.addEventListener("click",(e)=>{
    menu.classList.toggle("show")
})

    
       
