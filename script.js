let weather = {
    'apiKey': '787ac809f4b69e1af64183f6d205a32e',
    fetchWeather: function(city) {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' 
        + city 
        + '&units=metric&appid=' 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { visibility } = data;
        const { feels_like } = data.main;
        console.log(name, description, temp, humidity, speed)
        document.querySelector('.city').innerText = name;
        document.querySelector('.description').innerText = description;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
        document.querySelector('.temperature').innerText = temp + '°C';
        document.querySelector('.humidity').innerText = humidity;
        document.querySelector('.wind').innerText = speed;
        document.querySelector('.real').innerText = 'RealFeel: ' + feels_like;
        document.querySelector('.visibility').innerText = 'Visibility: ' + visibility;
    }
}