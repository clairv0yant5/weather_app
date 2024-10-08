//Selecting DOM elements

const tempField = document.querySelector('.temp');
const cityNameField = document.querySelector('.cityName');
const DnTField = document.querySelector('.DnT');
const emojiField = document.querySelector('.icon');
const conditionField = document.querySelector('.condition');
const search = document.querySelector('.city');
const form = document.querySelector('form');
const mainContainer = document.querySelector('.container');

form.addEventListener('submit', e => {
    e.preventDefault();
    const cityName = search.value;
    getWeatherData(cityName);
})

const getWeatherData = async city => {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=b2baab2a2cd64272aa1163455241405&q=${city}&aqi=no`

        const response = await fetch(url);
        const weatherData = await response.json();

        const temp = weatherData.current.temp_c;
        const cityname = weatherData.location.name;
        const DnT = weatherData.current.last_updated;
        const img = weatherData.current.condition.icon;
        const condition = weatherData.current.condition.text;

        tempField.innerText = temp + '°C';
        cityNameField.innerText = cityname;
        DnTField.innerText = DnT;
        emojiField.src = img;
        conditionField.innerText = condition;

        changeBGcolor(condition);
    }catch {
        alert("Invalid City Name")
    }
}

getWeatherData('New Delhi');

const changeBGcolor = weatherCondition => {
    //inferior way -->
    // if(weatherCondition === "Cloudy") {
    //     mainContainer.style.background = 'linear-gradient(to bottom, #B0C4DE, #708090, #2F4F4F)';
    // }else if (weatherCondition === "Sunny") {
    //     mainContainer.style.background = 'linear-gradient(to bottom, #87CEEB, #FFD700, #FFA500)';
    // }else if(weatherCondition === "Mist") {
    //     mainContainer.style.background = 'linear-gradient(to bottom, #D3D3D3, #C0C0C0, #F5F5F5)';
    // }else if(weatherCondition === "Clear") {
    //     mainContainer.style.background = 'linear-gradient(to bottom, #00BFFF, #87CEFA, #FFFFFF)';
    // }else if(weatherCondition === "Partly cloudy") {
    //     mainContainer.style.background = ' linear-gradient(to bottom, #87CEEB, #B0C4DE, #FFFFFF)';
    // }else if(weatherCondition === "Overcast") {
    //     mainContainer.style.background = 'linear-gradient(to bottom, #A9A9A9, #B0C4DE, #D3D3D3)';
    // }else if(weatherCondition === "Patchy rain nearby") {
    //     mainContainer.style.background = 'linear-gradient(to bottom, #4B6F92, #B0C4DE, #A9A9A9)';
    // }else if(weatherCondition === "Fog") {
    //     mainContainer.style.background = 'linear-gradient(to bottom, #D3D3D3, #E0E0E0, #FFFFFF)';
    // }else if(weatherCondition === "Light rain") {
    //     mainContainer.style.background = 'linear-gradient(to bottom, #A9C8E2, #B0C4DE, #C0C0C0)';
    // }

    //Better way --> OBJECT LITERALS
    let colorObj = {
        "Cloudy": 'linear-gradient(to bottom, #B0C4DE, #708090, #2F4F4F)',
        "Sunny": 'linear-gradient(to bottom, #87CEEB, #FFD700, #FFA500)',
        "Mist":' linear-gradient(to bottom, #D3D3D3, #C0C0C0, #F5F5F5)',
        "Clear": 'linear-gradient(to bottom, #00BFFF, #87CEFA, #FFFFFF)',
        "Partly cloudy": 'linear-gradient(to bottom, #87CEEB, #B0C4DE, #FFFFFF)',
        "Overcast": 'linear-gradient(to bottom, #A9A9A9, #B0C4DE, #D3D3D3)',
        "Patchy rain nearby": 'linear-gradient(to bottom, #4B6F92, #B0C4DE, #A9A9A9)',
        "Fog": 'linear-gradient(to bottom, #D3D3D3, #E0E0E0, #FFFFFF)',
        "Light rain": 'linear-gradient(to bottom, #A9C8E2, #B0C4DE, #C0C0C0)',
    }

    const colorValue = colorObj[weatherCondition];
    mainContainer.style.background = colorValue;
    // console.log(colorValue);

}

