document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
    let cityName = document.querySelector('input').value.toLowerCase()

    fetch(`https://api.weatherbit.io/v2.0/current?city=${cityName}&`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#city-name').innerText = data.data[0].city_name
      document.querySelector('#current-weather').innerText = data.data[0].weather.description
      
      document.querySelector('#current-icon').innerText = data.data[0].weather.icon
      document.querySelector('#current-humidity').innerText = data.data[0].rh
      document.querySelector('#current-temp').innerText = data.data[0].app_temp
      document.querySelector('#wind-speed').innerText = data.data[0].wind_spd
      // document.querySelector('img').src = data.data[0].weather.icon
      // document.querySelector('h3').innerText = data.data[0].weather.icon
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
