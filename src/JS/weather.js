// openWeather icon number별 font Awesome 아이콘 클래스명
let weatherIcon = {
  '01' : 'fas fa-sun',
  '02' : 'fas fa-cloud-sun',
  '03' : 'fas fa-cloud',
  '04' : 'fas fa-cloud-meatball',
  '09' : 'fas fa-cloud-sun-rain',
  '10' : 'fas fa-cloud-showers-heavy',
  '11' : 'fas fa-poo-storm',
  '13' : 'far fa-snowflake',
  '50' : 'fas fa-smog'
}

// 월별 영문 축약어
const months = [
  "Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."
];

const months2 = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

// 날짜에 st, nd, rd, th 붙이기
const nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

// Openweather API 날짜 정보 받을 수 있는 API키
const API_KEY = "d1f4c51106f97ceb117112414f8e5794";

// 브라우저에서 제공하는 위치정보 받는 기본함수
// (navigator.geolocation에서 위치정보 받는것을 성공했을 때 실행 하는 함수)
function onGeoOk (position) {
  // 위도 경도 변수 지정
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  
  // Openweather API 날씨 정도 사용을 위한 url 변수 지정 (위도 경도 참조)
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&appid=${API_KEY}&units=metric`;
  
  // Openweather API 날씨 중 현재 도시명을 받기 위한 url 지정
  const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  
  
  // 일주일간의 온도 정보 가져오기 위한 Openweather API 서버에 요청
  fetch(url).then(response => response.json()).then(data => {

    // 도시명을 가져오기 위한 서버 fetch 요청
    fetch(url2).then(response => response.json()).then(cityData => {

      
      // 서버로 요청한 데이터를 배열로 담기 위한 빈 배열 지정
      const tempArray = [];
      
      // 날짜 정보 담기 위한 변수 지정
      var date = '';

      // Openweather 서버에 요청 후 받아온 json 데이터 중 도시명 변수 지정
      const city = cityData.name;
    
      // 날짜 정보 생성
      date = new Date(data.daily[0].dt*1000);
      let month = date.getMonth();
      let day = date.getDate();

      // 날씨 정보 입력하기
      let icon = data.current.weather[0].icon.substr(0, 2);
      let dayTemp = Math.floor(data.current.temp);
      let weatherDesc = '<i class="'+ weatherIcon[icon]+'"></i>';

      // 날씨 정보 태그 넣기
      document.querySelector('.dayTemp').innerHTML = 
          `<div style="font-size: 20px; font-weight: 300; margin-top: 10px;">
          ${months2[month]} ${day}<sub style="font-size: 12px;">${nth(day)}</sub><br> ${city}<br> ${dayTemp}℃ <span class="weather-icon-span">${weatherDesc}</span></div>`;

    
      
      // div에 도시명 넣기
      // document.querySelector('.product > h2').innerHTML += `<span>현재위치 : ${city}</span><br><span>날짜별 온도</span><br>` 


      /*//일주일치 날씨 정보
      // Openweather API를 배열에 담고 div에 넣기 위한 for문
      for (let i = 0; i < data.daily.length; i++) {
        
        // Openweather API에서 일주일간 온도정보 받아오기
        tempArray.push(data.daily[i].temp.day);
        
        // Openweahter API에서 받아온 일주일 날짜정보를 초단위로 변경하기 (*1000)
        // 이렇게 해야 getMonth(), getDate() 함수가 적용됨
        date = new Date(data.daily[i].dt*1000);
        
        // div에 날짜 및 온도, 날씨정보 넣기
        document.querySelector('.product > h2').innerHTML += 
          '<span id="dayTemp'+(i+1)+'">'+(date.getMonth()+1)+"월 "
          +(date.getDate())+"일"+' : '+tempArray[i]+'℃ ('+data.daily[i].weather[0].description+')</span><br>';
          
      }
      */
    
      // 로컬스토리지에 온도 값 저장하기
      localStorage.setItem('temp', dayTemp);

    });

  });


}

// navigator.geolocation.getCurrentPosition에서 위치 정보를 받는데 실패 했을 때,
// 실행 할 함수
function onGeoError() {
  alert("위치정보를 찾을 수 없습니다.")
}

// navigator.geolocation.getCurrentPosition(위치 정보 받는데 성공했을 때 실행 할 함수, 실패 했을 때 실행 할 함수)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function test(data) {
  console.log(data)
}