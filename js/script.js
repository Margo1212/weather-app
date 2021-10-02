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
        const { country } = data.sys;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { feels_like } = data.main;
        const { speed } = data.wind;
        const { all } = data.clouds;
        const { visibility } = data;
        

        
        console.log(name, country, description, temp, humidity, speed, all)
        document.querySelector('.city').innerText = 'Current location: ' + name + ', ' + country;
        document.querySelector('.temperature').innerText = Math.ceil(temp) + '°C';
        document.querySelector('.description').innerText = description;
        
        document.querySelector('.real').innerText = 'RealFeel: ' + Math.ceil(feels_like) + '°C';
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity;
        document.querySelector('.wind').innerText = "Wind speed: " + speed + 'km/h';
        document.querySelector('.cloudcover').innerText = 'Cloudcover: ' + all + '%';
        document.querySelector('.visibility').innerText = 'Visibility: ' + visibility;
    },

    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
};

document.querySelector('button').addEventListener('click', function() {
weather.search()
})
