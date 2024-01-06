// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "725ca95aa0msh489311c651c759dp135cb8jsnc23f24a0c633",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  async function fetchData(cityName, index) {
    try {
      const response = await fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
          cityName,
        options
      );
      const result = await response.json();
  
      console.log(result);
      console.log(index);
      document.getElementById(`city[${index}]`).innerHTML = cityName;
      document.getElementById(`cloud_pct[${index}]`).innerHTML = result.cloud_pct;
      document.getElementById(`temp[${index}]`).innerHTML = result.temp;
      document.getElementById(`humidity[${index}]`).innerHTML = result.humidity;
      document.getElementById(`min_temp[${index}]`).innerHTML = result.min_temp;
      document.getElementById(`max_temp[${index}]`).innerHTML = result.max_temp;
      document.getElementById(`wind_speed[${index}]`).innerHTML =
        result.wind_speed;
      document.getElementById(`wind_degrees[${index}]`).innerHTML =
        result.wind_degrees;
      document.getElementById(`sunrise[${index}]`).innerHTML = result.sunrise;
      document.getElementById(`sunset[${index}]`).innerHTML = result.sunset;
      document.getElementById(`feels_like[${index}]`).innerHTML =result.feels_like;
  
      if (index === 0) {
        try {
          
          cloud_pct20.innerHTML = result.cloud_pct;
          temp20.innerHTML = result.temp;
          wind_speed20.innerHTML = result.wind_speed;
        } catch (error) {
          console.error(error);
        }
      }
      // document.getElementById(`cloud_pct[${index+20}]`).innerHTML = result.cloud_pct;
      // document.getElementById(`temp[${index+20}]`).innerHTML = result.temp;
      // document.getElementById(`wind_speed[${index+20}]`).innerHTML = result.temp;
    } catch (error) {
      console.error(error);
    }
  }
  const submit = document.getElementById("submit"); // Assuming you have an element with id "submit"
  const cityInput = document.getElementById("cityName"); // Assuming you have an input element with id "city"
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    fetchData(cityInput.value, 0);
  });
  
  fetchData("Delhi",0);
  
  const cities=['Allahabad','Varanasi','Kanpur','Lucknow','Mirzapur'];
  let i;
  for(i=0;i<5;i++){
      fetchData(cities[i],i+1);
  }
  