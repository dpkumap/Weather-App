async function fetchData(city) {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "25e3fa80edmshe200643f528d067p14066djsnb359870ad42f",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function displayDefaultCityInTable(cityId) {
  try {
    let city = document.getElementById(cityId).textContent;
    const response = await fetchData(city);

    let first = cityId.charAt(0);
    document.getElementById(first + "temper").innerHTML =
      response.temp + "&deg;C";
    document.getElementById(first + "humid").innerHTML =
      response.humidity + "%";
    document.getElementById(first + "minT").innerHTML =
      response.min_temp + "&deg;C";
    document.getElementById(first + "maxT").innerHTML =
      response.max_temp + "&deg;C";
    document.getElementById(first + "windS").innerHTML =
      response.wind_speed + "m/s";
  } catch (error) {
    console.error(error);
  }
}

async function displayCityOnClick(input){


  let inputCity = input.value;

  try {
      let response = await fetchData(inputCity);
      console.log(response);

      
      document.getElementById("city").textContent = inputCity.charAt(0).toUpperCase()+inputCity.slice(1,inputCity.length);
      
      let temper=response.temp;
      if(temper<0){
          img.src="./imgs/freezing.jpg";
          document.getElementById("status").innerHTML="Freezing";
      }else if(temper>=0&&temper<=10){

          img.src="./imgs/coldy.jpg";
          document.getElementById("status").innerHTML="Coldly";

      }else if(temper>=11&&temper<20){

          img.src="./imgs/cool.jpg";
          document.getElementById("status").innerHTML="Cool";
      }else if(temper>=20&&temper<30){
          
          img.src="./imgs/warm.jpg";
          document.getElementById("status").innerHTML="Warm";

      }else if(temper>=30&&temper<=40){
          
          img.src="./imgs/hot.jpg";
          document.getElementById("status").innerHTML="Hot";

      }else if(temper>40){
          
          img.src="./imgs/toohot.jpg";
          document.getElementById("status").innerHTML="Extreme heat";
      }
      document.getElementById("temp").innerHTML = temper+"&deg;C";
      document.getElementById("humidity").innerHTML = response.humidity+"%";
      document.getElementById("wind_speed").innerHTML = response.wind_speed+" k/hr";
      //remaining elements
  } catch (error) {
      // console.error(error);
      document.getElementById("status").textContent = "City not found"; // Display error message
      document.getElementById("city").textContent = ""; // Clear previous city name
      document.getElementById("temp").textContent = ""; // Clear previous temperature
      document.getElementById("humidity").textContent = ""; // Clear previous humidity
      document.getElementById("wind_speed").textContent = ""; // Clear previous wind speed
  }
}

async function displayDefaultCity(inputCity){

  try {
    let response = await fetchData(inputCity);
    console.log(response);

    
    document.getElementById("city").textContent = inputCity.charAt(0).toUpperCase()+inputCity.slice(1,inputCity.length);
    
    let temper=response.temp;
    if(temper<0){
        img.src="./imgs/freezing.jpg";
        document.getElementById("status").innerHTML="Freezing";
    }else if(temper>=0&&temper<=10){

        img.src="./imgs/coldy.jpg";
        document.getElementById("status").innerHTML="Coldly";

    }else if(temper>=11&&temper<20){

        img.src="./imgs/cool.jpg";
        document.getElementById("status").innerHTML="Cool";
    }else if(temper>=20&&temper<30){
        
        img.src="./imgs/warm.jpg";
        document.getElementById("status").innerHTML="Warm";

    }else if(temper>=30&&temper<=40){
        
        img.src="./imgs/hot.jpg";
        document.getElementById("status").innerHTML="Hot";

    }else if(temper>40){
        
        img.src="./imges/toohot.jpg";
        document.getElementById("status").innerHTML="Extreme heat";

    }
    document.getElementById("temp").innerHTML = temper+"&deg;C";
    document.getElementById("humidity").innerHTML = response.humidity+"%";
    document.getElementById("wind_speed").innerHTML = response.wind_speed+" k/hr";
    //remaining elements
} catch (error) {
    // console.error(error);
    document.getElementById("status").textContent = "City not found"; // Display error message
    document.getElementById("city").textContent = ""; // Clear previous city name
    document.getElementById("temp").textContent = ""; // Clear previous temperature
    document.getElementById("humidity").textContent = ""; // Clear previous humidity
    document.getElementById("wind_speed").textContent = ""; // Clear previous wind speed
}
}
// Display weather for Pune, Mumbai, and Kolkata
displayDefaultCityInTable("pune");
displayDefaultCityInTable("mumbai");
displayDefaultCityInTable("kolkata");
displayDefaultCity("Ahmednagar");

var input = document.getElementById("cityInput");
var img=document.getElementById("img");


document.getElementById("searchBtn").addEventListener("click", async (e) => {
    e.preventDefault();
    displayCityOnClick(input);
});

