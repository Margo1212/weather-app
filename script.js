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
        const { feels_like } = data.main;
        const { speed } = data.wind;
        const { all } = data.clouds;
        const { visibility } = data;
        
        console.log(name, description, temp, humidity, speed, all)
        document.querySelector('.city').innerText = 'Current location: ' + name;
        document.querySelector('.temperature').innerText = temp + '°C';
        document.querySelector('.description').innerText = description;
        document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
        document.querySelector('.real').innerText = 'RealFeel: ' + feels_like + '°C';
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity;
        document.querySelector('.wind').innerText = speed;
        document.querySelector('.cloudcover').innerText = 'Cloudcover: ' + all + '%';
        document.querySelector('.visibility').innerText = 'Visibility: ' + visibility;
    }
}