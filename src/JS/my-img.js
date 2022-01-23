<<<<<<< Updated upstream
const imgBox = document.querySelector(".imgBox2");
function loadImages(numImages = 10){
    let i=0;
     while(i < numImages){
     fetch('https://dog.ceo/api/breeds/image/random')
     .then(response=>response.json())
     .then(data=>{
     const img =  document.createElement('img');
     img.src = `${data.message}`
     imgBox.appendChild(img);
     })
     i++;
     }   
     }
 
 loadImages();

 window.addEventListener('scroll',()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadImages();
    }
})

=======
const items = [
	{
		name: '4_1_c',
		temperature: '-4',
		look: 'casual',
		image: './assets/attire/4_1_c.jpg',
	},
	{
		name: '4_2_c',
		temperature: '-4',
		look: 'casual',
		image: './assets/attire/4_2_c.jpg',
	},
	{
		name: '4_3_m',
		temperature: '-4',
		look: 'modern',
		image: './assets/attire/4_3_m.jpg',
	},
	{
		name: '4_4_m',
		temperature: '4',
		look: 'modern',
		image: './assets/attire/4_4_m.jpg',
	},
	{
		name: '4_5_s',
		temperature: '4',
		look: 'street',
		image: './assets/attire/4_5_s.jpg',
	},
	{
		name: '4_6_c',
		temperature: '4',
		look: 'casual',
		image: './assets/attire/4_6_c.jpg',
	},
	{
		name: '4_7_c',
		temperature: '4',
		look: 'casual',
		image: './assets/attire/4_7_c.jpg',
	},
	{
		name: '4_8_c',
		temperature: '4',
		look: 'casual',
		image: './assets/attire/4_8_c.jpg',
	},
	{
		name: '4_9_c',
		temperature: '4',
		look: 'casual',
		image: './assets/attire/4_9_c.jpg',
	},
	{
		name: '4_10_c',
		temperature: '4',
		look: 'casual',
		image: './assets/attire/4_10_c.jpg',
	},
	{
		name: '4_11_c',
		temperature: '4',
		look: 'casual',
		image: './assets/attire/4_11_c.jpg',
	},
	{
		name: '4_12_m',
		temperature: '4',
		look: 'modern',
		image: './assets/attire/4_12_m.jpg',
	},
	{
		name: '4_13_c',
		temperature: '4',
		look: 'casual',
		image: './assets/attire/4_13_c.jpg',
	},
	{
		name: '4_14_c',
		temperature: '4',
		look: 'casual',
		image: './assets/attire/4_14_c.jpg',
	},
	{
		name: '4_15_c',
		temperature: '4',
		look: 'casual',
		image: './assets/attire/4_15_c.jpg',
	},
	{
		name: '4_16_c',
		temperature: '4',
		look: 'casual',
		image: './assets/attire/4_16_c.jpg',
	},
	{
		name: '4_17_r',
		temperature: '4',
		look: 'romantic',
		image: './assets/attire/4_17_r.jpg',
	},
	{
		name: '5_1_c',
		temperature: '5',
		look: 'casual',
		image: './assets/attire/5_1_c.jpg',
	},
	{
		name: '5_2_m',
		temperature: '5',
		look: 'modern',
		image: './assets/attire/5_2_m.jpg',
	},
	{
		name: '5_3_m',
		temperature: '5',
		look: 'modern',
		image: './assets/attire/5_3_m.jpg',
	},
	{
		name: '5_4_c',
		temperature: '5',
		look: 'casual',
		image: './assets/attire/5_4_c.jpg',
	},
	{
		name: '5_5_c',
		temperature: '5',
		look: 'casual',
		image: './assets/attire/5_5_c.jpg',
	},
	{
		name: '5_6_m',
		temperature: '5',
		look: 'romantic',
		image: './assets/attire/5_6_m.jpg',
	},
	{
		name: '5_7_c',
		temperature: '5',
		look: 'casual',
		image: './assets/attire/5_7_c.jpg',
	},
	{
		name: '5_8_c',
		temperature: '5',
		look: 'casual',
		image: './assets/attire/5_8_c.jpg',
	},
	{
		name: '5_9_c',
		temperature: '5',
		look: 'casual',
		image: './assets/attire/5_9_c.jpg',
	},
	{
		name: '5_10_m',
		temperature: '5',
		look: 'modern',
		image: './assets/attire/5_10_m.jpg',
	},
	{
		name: '5_11_m',
		temperature: '5',
		look: 'modern',
		image: './assets/attire/5_11_m.jpg',
	},
	{
		name: '5_12_c',
		temperature: '5',
		look: 'casual',
		image: './assets/attire/5_12_c.jpg',
	},
	{
		name: '5_13_c',
		temperature: '5',
		look: 'casual',
		image: './assets/attire/5_13_c.jpg',
	},
	{
		name: '5_14_a',
		temperature: '5',
		look: 'amekaji',
		image: './assets/attire/5_14_a.jpg',
	},
	{
		name: '5_15_c',
		temperature: '5',
		look: 'casual',
		image: './assets/attire/5_15_c.jpg',
	},
	{
		name: '5_16_m',
		temperature: '5',
		look: 'modern',
		image: './assets/attire/5_16_m.jpg',
	},
	{
		name: '9_1_c',
		temperature: '9',
		look: 'casual',
		image: './assets/attire/9_1_c.jpg',
	},
	{
		name: '9_2_c',
		temperature: '9',
		look: 'casual',
		image: './assets/attire/9_2_c.jpg',
	},
	{
		name: '9_3_c',
		temperature: '9',
		look: 'casual',
		image: './assets/attire/9_3_c.jpg',
	},
	{
		name: '9_4_m',
		temperature: '9',
		look: 'modern',
		image: './assets/attire/9_4_m.jpg',
	},
	{
		name: '9_5_s',
		temperature: '9',
		look: 'street',
		image: './assets/attire/9_5_s.jpg',
	},
	{
		name: '9_6_c',
		temperature: '9',
		look: 'casual',
		image: './assets/attire/9_6_c.jpg',
	},
	{
		name: '9_7_m',
		temperature: '9',
		look: 'modern',
		image: './assets/attire/9_7_m.jpg',
	},
	{
		name: '9_8_c',
		temperature: '9',
		look: 'casual',
		image: './assets/attire/9_8_c.jpg',
	},
	{
		name: '9_9_s',
		temperature: '9',
		look: 'street',
		image: './assets/attire/9_9_s.jpg',
	},
	{
		name: '9_10_c',
		temperature: '9',
		look: 'casual',
		image: './assets/attire/9_10_c.jpg',
	},
	{
		name: '9_11_m',
		temperature: '9',
		look: 'modern',
		image: './assets/attire/9_11_m.jpg',
	},
	{
		name: '9_12_c',
		temperature: '9',
		look: 'casual',
		image: './assets/attire/9_12_c.jpg',
	},
	{
		name: '9_13_c',
		temperature: '9',
		look: 'casual',
		image: './assets/attire/9_13_c.jpg',
	},
	{
		name: '9_14_a',
		temperature: '9',
		look: 'amekaji',
		image: './assets/attire/9_14_a.jpg',
	},
	{
		name: '9_15_c',
		temperature: '9',
		look: 'casual',
		image: './assets/attire/9_15_c.jpg',
	},
	{
		name: '9_16_a',
		temperature: '-1',
		look: 'amekaji',
		image: './assets/attire/9_16_a.jpg',
	},
	{
		name: '12_1_r',
		temperature: '12',
		look: 'amekaji',
		image: './assets/attire/12_1_r.jpg',
	},
	{
		name: '12_2_r',
		temperature: '12',
		look: 'romatic',
		image: './assets/attire/12_2_r.jpg',
	},
	{
		name: '12_3_r',
		temperature: '12',
		look: 'romatic',
		image: './assets/attire/12_3_r.jpg',
	},
	{
		name: '12_4_s',
		temperature: '12',
		look: 'street',
		image: './assets/attire/12_4_s.jpg',
	},
	{
		name: '12_5_s',
		temperature: '12',
		look: 'street',
		image: './assets/attire/12_5_s.jpg',
	},
	{
		name: '12_6_s',
		temperature: '12',
		look: 'street',
		image: './assets/attire/12_6_s.jpg',
	},
	{
		name: '12_7_s',
		temperature: '12',
		look: 'street',
		image: './assets/attire/12_7_s.jpg',
	},
	{
		name: '12_8_s',
		temperature: '12',
		look: 'romatic',
		image: './assets/attire/12_2_r.jpg',
	},
	{
		name: '12_9_s',
		temperature: '12',
		look: 'street',
		image: './assets/attire/12_9_s.jpg',
	},
	{
		name: '12_10_s',
		temperature: '12',
		look: 'street',
		image: './assets/attire/12_10_s.jpg',
	},
	{
		name: '12_11_s',
		temperature: '12',
		look: 'street',
		image: './assets/attire/12_11_s.jpg',
	},
	{
		name: '17_1_r',
		temperature: '17',
		look: 'romantic',
		image: './assets/attire/17_1_r.jpg',
	},
	{
		name: '17_2_r',
		temperature: '17',
		look: 'romantic',
		image: './assets/attire/17_2_r.jpg',
	},
	{
		name: '17_3_r',
		temperature: '17',
		look: 'romantic',
		image: './assets/attire/17_3_r.jpg',
	},
	{
		name: '17_4_s',
		temperature: '17',
		look: 'street',
		image: './assets/attire/17_4_s.jpg',
	},
	{
		name: '17_5_s',
		temperature: '17',
		look: 'street',
		image: './assets/attire/17_5_s.jpg',
	},
	{
		name: '17_6_r',
		temperature: '17',
		look: 'romantic',
		image: './assets/attire/17_6_r.jpg',
	},
	{
		name: '17_7_r',
		temperature: '17',
		look: 'romantic',
		image: './assets/attire/17_7_r.jpg',
	},
	{
		name: '17_8_s',
		temperature: '17',
		look: 'street',
		image: './assets/attire/17_8_s.jpg',
	},
	{
		name: '20_1_r',
		temperature: '20',
		look: 'romantic',
		image: './assets/attire/20_1_r.jpg',
	},
	{
		name: '20_2_s',
		temperature: '20',
		look: 'street',
		image: './assets/attire/20_2_s.jpg',
	},
	{
		name: '20_3_s',
		temperature: '20',
		look: 'street',
		image: './assets/attire/20_3_s.jpg',
	},
	{
		name: '20_4_r',
		temperature: '20',
		look: 'romantic',
		image: './assets/attire/20_4_r.jpg',
	},
	{
		name: '20_5_r',
		temperature: '20',
		look: 'romantic',
		image: './assets/attire/20_5_r.jpg',
	},
	{
		name: '20_6_c',
		temperature: '20',
		look: 'casual',
		image: './assets/attire/20_6_c.jpg',
	},
	{
		name: '20_7_m',
		temperature: '20',
		look: 'modern',
		image: './assets/attire/20_7_m.jpg',
	},
	{
		name: '20_8_r',
		temperature: '-4',
		look: 'romantic',
		image: './assets/attire/20_8_r.jpg',
	},
	{
		name: '20_9_s',
		temperature: '-3',
		look: 'street',
		image: './assets/attire/20_9_s.jpg',
	},
	{
		name: '23_1_r',
		temperature: '23',
		look: 'romatic',
		image: './assets/attire/23_1_r.jpg',
	},
	{
		name: '23_2_r',
		temperature: '23',
		look: 'romatic',
		image: './assets/attire/23_2_r.jpg',
	},
	{
		name: '23_3_r',
		temperature: '1',
		look: 'romatic',
		image: './assets/attire/23_3_r.jpg',
	},
	{
		name: '23_4_r',
		temperature: '2',
		look: 'romatic',
		image: './assets/attire/23_4_r.jpg',
	},
];

//템플릿 (imgBox안에 이미지 띄우기)
function itemTemplate(item) {
	return `
  <img src="${item.image}">
  `;
}

//api에서 기온값 가져오기
const Temp = localStorage.getItem('temp');
console.log(Temp);

//select에 실시간 기온값 넣은 option추가
document.getElementById('nowTemp').innerHTML = `
<option value="">${Temp}</option>
`;

//select에서 실시간 기온 가져오기
let tempOptions = document.getElementById('nowTemp');
console.log(tempOptions.text);

//실시간 온도와 json온도가 같은것만 필터링
const filtered = items.filter((i) => i.temperature == nowTemp.text);

if (tempOptions.text < 30 || tempOptions.text > 30) {
	document.getElementById('imgBox').innerHTML = `
    ${filtered.map(itemTemplate).join('')}
    `;
	console.log(filtered);
}

//셀렉트(기온)별 이미지 띄우기
function selects(s) {
	filtered_items = items.filter((i) => i.temperature == s.value);
	document.getElementById('imgBox').innerHTML = `
    ${filtered_items.map(itemTemplate).join('')}
    `;
}

//버튼별(룩)별 이미지 띄우기
function btnLook(s) {
	filter_look = filtered_items.filter((i) => i.look == s.value);
	document.getElementById('imgBox').innerHTML = `
    ${filter_look.map(itemTemplate).join('')}
    `;
}
>>>>>>> Stashed changes
