const button = document.getElementById('get-weather');
let input = document.getElementById('city');
let city=null;
button.addEventListener('click', () => {
    const cityInput = document.getElementById('city');
    city = cityInput.value;
    if(city===null || city===""){
        alert("Please enter a city name");
        return;
    }
    myFunction();
});

  const myFunction = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d6885c0ccedaeaa705a4aefbc7d05f41&units=metric`);
      const data = await response.json();
      const para= document.getElementById('temperature');
      para.innerText = `Temperature in ${city}: ${data.main.temp} °C`;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
