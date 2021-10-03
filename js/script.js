let weather = {
    'apiKey': '787ac809f4b69e1af64183f6d205a32e',
    fetchWeather: function(city) {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=' 
        + city 
        + '&units=metric&appid=' 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch(error => alert('Please enter correct location'))
        
    },
    
    displayWeather: function(data) {
        const { name } = data;
        const { description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { feels_like } = data.main;
        const { speed } = data.wind;
        const { all } = data.clouds;
        const { visibility } = data;
        

        
        console.log(name, description, temp, humidity, speed, all)
        document.querySelector('.city').innerText = 'Current location: ' + name + ', ';
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

const button = document.querySelector('button')
const weatherContainer = document.querySelector('.weather-container');
const searchBox = document.querySelector('.search')



button.addEventListener('click', function() {
    weather.search()
    weatherContainer.classList.add('container-open')
    searchBox.classList.add('search-open')
})

