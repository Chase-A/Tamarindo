

async function getWeather(){
    let response = await fetch('http://api.openweathermap.org/data/2.5/weather?lat=10.2993&lon=-85.8371&appid=96e6d2a5614684172ea97d9cd6f33700&units=imperial')
    let data = await response.json()
    console.log(data)
    return [data.main.temp, data.weather[0].id]

}


async function renderWeather(){
    const tempElem = document.getElementById('current-temp')
    const cloudSVG = document.getElementById('wi-cloud')
    const rainSVG = document.getElementById('wi-rain')
    const sunSVG = document.getElementById('wi-sun')
    const snowSVG = document.getElementById('wi-snow')

    const response = await getWeather();
    console.log(response)
    const tempResponse = await response[0]
    const weatherResponse = await response[1]

    tempElem.innerText = tempResponse.toString().slice(0, -3)

    if(weatherResponse < 600){
        rainSVG.style.display = 'initial';
        console.log('rain')
    }
    else if(weatherResponse < 700){
        snowSVG.style.display = 'initial';
        console.log('snow')
    }
    else if(weatherResponse === 800 || weatherResponse === 801){
        sunSVG.style.display = 'initial';
        console.log('sun')
    }
    else{
        cloudSVG.style.display = 'initial';
        console.log('cloud')
    }



}

renderWeather()
