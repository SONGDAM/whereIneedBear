"use strict"; 

//데이터 로드 


import fetch from 'node-fetch';

console.log('node-fetch');


function loadImages(){
    return fetch("../../data.json")
    .then((response) => response.json());
}
        

loadImages().then((items)=>{
    console.log(items);
    displayItems(items);
});

function displayItems(items){
    const container = document.querySelector(".product");
    container.innerHTML = items.map((item)=> createHTMLString(item)).join("");
}




