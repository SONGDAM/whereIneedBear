"use strict"; 

//데이터 로드 


function loadImages(){
    return fetch("../../data.json")
        .then((response) => response.json())
        .then((json)=>json.items);
}

loadImages().then((items)=>{
    console.log(items);
    displayItems(items);
});

function displayItems(items){
    const container = document.querySelector(".product");
    container.innerHTML = items.map((item)=> createHTMLString(item)).join("");
}

// function createHTMLString(item){
//     return 
// }