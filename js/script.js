let weather = {
    'apiKey': '787ac809f4b69e1af64183f6d205a32e',
    fetchWeather: function(city) {
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' 
        + city 
        + '&units=metric&appid=' 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        //.catch(error => alert('Please enter correct location'))
        
    },
    
    displayWeather: function(data) {
        const list = data.list[0]    
        const { name } = data.city;

        //today
        const { description } = list.weather[0];
        const { temp, humidity, feels_like } = list.main;
        const { speed } = list.wind;
        const { all } = list.clouds;
        const { visibility } = list;

        //daily
        const list2 = data.list[8]
        const temp2 = list2.main.temp
        const description2 = list2.weather[0].description;

        const list3 = data.list[16]
        const temp3 = list3.main.temp
        const description3 = list3.weather[0].description;

        const list4 = data.list[24]
        const temp4 = list4.main.temp
        const description4 = list4.weather[0].description;






        console.log(name, description, temp, humidity, feels_like, speed, all, visibility )
        //today
        document.querySelector('.city').innerText = 'Current location: ' + name + ', ';
        document.querySelector('.temperature').innerText = Math.round(temp) + '°C';
        document.querySelector('.description').innerText = description;        
        document.querySelector('.real').innerText = 'RealFeel: ' + Math.round(feels_like) + '°C';
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity;
        document.querySelector('.wind').innerText = "Wind speed: " + speed + 'km/h';
        document.querySelector('.cloudcover').innerText = 'Cloudcover: ' + all + '%';
        document.querySelector('.visibility').innerText = 'Visibility: ' + visibility;

        //daily

        document.querySelector('.tomorrow .desc').innerText = description2;
        document.querySelector('.tomorrow .temp').innerText = Math.round(temp2) + '°C';

        document.querySelector('.dat .desc').innerText = description3;
        document.querySelector('.dat .temp').innerText = Math.round(temp3) + '°C';
 
        document.querySelector('.a2d .desc').innerText = description4;
        document.querySelector('.a2d .temp').innerText = Math.round(temp4) + '°C';



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

