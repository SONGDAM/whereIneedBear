// 메인 이미지 배열 만들기
let mainItems = {
    'looks': []
}

// 메인 페이지에 데이터 생성 함수
function addObj(num) {
    let mainTemp = 0;

    if(Temp <= 4) {
        mainTemp = 4;
    } else if (Temp >= 4) {
        mainTemp = 8;
    } else if (Temp >= 11) {
        mainTemp = 11;
    } else if (Temp >= 16) {
        mainTemp = 16;
    } else if (Temp >= 19) {
        mainTemp = 19;
    } else if (Temp >= 22) {
        mainTemp = 22;
    } else if (Temp >= 27) {
        mainTemp = 27;
    }
    
    console.log("mainTemp : " + mainTemp);

    for(let j = 0; j < 5; j++) {
        mainItems.looks[j] = [];
        for(let i = 0; i < num; i++) {
            mainItems.looks[j][i] = {};
            mainItems.looks[j][i].name = (i+1); 
            mainItems.looks[j][i].temperature = mainTemp; 
            mainItems.looks[j][i].image = `./assets/${mainTemp}C/${mainItems.looks[j][i].name}.jpg`; 
        }
    }
}


// 메인 페이지 데이터 함수 실행
addObj(5);

// 오늘 기온 값
console.log(Temp);

console.log(mainItems);

function sample() {

    let first = document.querySelector(".swiper-wrapper");

    for(let i = 0; i < 5; i++) {
        first.children[i+1].style.backgroundImage = `url("${mainItems.looks[0][i].image}")`
    }

}

sample();

// ==========================================================================


// ==========================================================================


// import fetch from 'node-fetch';

// console.log('node-fetch');


// function loadImages(){
//     return fetch("../../data.json")
//     .then((response) => response.json());
// }
        

// loadImages().then((items)=>{
//     console.log(items);
//     displayItems(items);
// });

// function displayItems(items){
//     const container = document.querySelector(".product");
//     container.innerHTML = items.map((item)=> createHTMLString(item)).join("");
// }




