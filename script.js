
async function getWeather(){
  let city = document.getElementById("city").value;
  let apiKey = "41a4494fd4910b5099c56ebe596c8004"; // new key
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let response = await fetch(url);

    if (!response.ok) {
      // 401, 404, etc.
      document.getElementById("result").innerHTML =
          `Error: ${response.status} ${response.statusText}`;
      return;
    }

    let data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("result").innerHTML =
          `API error: ${data.message || 'Something went wrong'}`;
      return;
    }

    document.getElementById("result").innerHTML =
      `Temperature in ${city} is ${data.main.temp} °C`;

  } catch (err) {
    console.error(err);
    document.getElementById("result").innerHTML =
        "Network error or invalid request";
  }
}