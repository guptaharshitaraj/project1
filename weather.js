
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a55ff6af60mshacbfa5348697e73p136338jsn60b0355ccb59',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
//const searchBox=document.querySelector(".btn btn-outline-success input")
	//const searchBtn=document.querySelector(".btn btn-outline-success button")
const getweather=(city)=>{
	
	//cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
.then(response => response.json())
.then((response) => {
	
	console.log(response)
	cloud_pct.innerHTML=response.cloud_pct
	feels_like.innerHTML=response.feels_like
	humidity.innerHTML=response.humidity
	min_temp.innerHTML=response.min_temp
	max_temp.innerHTML=response.max_temp
	wind_speed.innerHTML=response.wind_speed
	wind_degrees.innerHTML=response.wind_degrees
	sunrise.innerHTML=response.sunrise
	temp.innerHTML=response.temp
	sunset.innerHTML=response.sunset
})
.catch(err => console.error(err));}
// const apikey="1b88ee7b4033e0b928f5aa66d57d3fae";
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=berlin";
 
// async function checkWeather(){
// 	const response = await fetch(apiUrl + `&appid=${apikey}`);
// 	var data= await response.json();
// 	console.log(data);
// }
// checkWeather();
//let submit=document.getElementById('submit');
// submit.addEventListener("click", (e)=>{
// 	getweather(city.value)
// })
// searchBtn.addEventListener("click",()=>{
// 	getweather(searchBox.value);
// })
 