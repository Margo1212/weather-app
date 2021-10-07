let weather = {
    'apiKey': '787ac809f4b69e1af64183f6d205a32e',
    fetchWeather: function(city) {
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' 
        + city 
        + '&units=metric&appid=' 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        //.catch((error) => alert('Please enter correct location'))
        
    },
    
    displayWeather: function(data) {
        const list = data.list[0]    
        const { name } = data.city;
        const { country } = data.city;

        //today
        const { description, id } = list.weather[0];
        const { temp, humidity, feels_like } = list.main;
        const { speed } = list.wind;
        const { all } = list.clouds;
        const { visibility } = list;

        //daily
        const list2 = data.list[8]
        const temp2 = list2.main.temp
        const description2 = list2.weather[0].description;
        const id2 = list2.weather[0].id;

        const list3 = data.list[16]
        const temp3 = list3.main.temp
        const description3 = list3.weather[0].description;
        const id3 = list3.weather[0].id;

        const list4 = data.list[24]
        const temp4 = list4.main.temp
        const description4 = list4.weather[0].description;
        const id4 = list4.weather[0].id;

        //icons


        //today
        document.querySelector('.city').innerText = 'Current location: ' + name + ', ' + country;
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
        
        //icons
        const weatherIcon = document.querySelector(".icon-weather")
        
            if(id == 800) {
                weatherIcon.src = '../images/sunny.png';
            }else if(id >= 801 && id <= 804) {
                weatherIcon.src = '../images/clouds.png';
            }else if(id >= 200 && id >= 232) {
                weatherIcon.src = '../images/lightning-and-rain.png';
            }else if(id == 600 && id <= 622) {
                weatherIcon.src = '../images/snow.png';
            }else if((id == 300 && id <= 321) || (id >= 500 && id <= 531)){
                weatherIcon.src = '../images/cloud-with-rain.png';
            }

            const weatherIcon1 = document.querySelector(".icon-weather1")
            
                if(id2 == 800) {
                    weatherIcon1.src = '../images/sunny.png';
                }else if(id2 >= 801 && id2 <= 804) {
                    weatherIcon1.src = '../images/clouds.png';
                }else if(id2 >= 200 && id2 <= 232) {
                    weatherIcon1.src = '../images/lightning-and-rain.png';
                }else if(id2 == 600 && id2 <= 622) {
                    weatherIcon1.src = '../images/snow.png';
                }else if((id2 == 300 && id2 <= 321) || (id2>= 500 && id2 <= 531)){
                    weatherIcon1.src = '../images/cloud-with-rain.png';
                }

                const weatherIcon2 = document.querySelector(".icon-weather2")
                
                    if(id3 == 800) {
                        weatherIcon2.src = '../images/sunny.png';
                    }else if(id3 >= 801 && id3 <= 804) {
                        weatherIcon2.src = '../images/clouds.png';
                    }else if(id3 >= 200 && id3 >= 232) {
                        weatherIcon2.src = '../images/lightning-and-rain.png';
                    }else if(id3 == 600 && id3 <= 622) {
                        weatherIcon2.src = '../images/snow.png';
                    }else if((id3 == 300 && id3 <= 321) || (id3>= 500 && id3 <= 531)){
                        weatherIcon2.src = '../images/cloud-with-rain.png';
                    }
                    
                    const weatherIcon3 = document.querySelector(".icon-weather3")
                
                    if(id4 == 800) {
                        weatherIcon3.src = '../images/sunny.png';
                    }else if(id4 >= 801 && id4 <= 804) {
                        weatherIcon3.src = '../images/clouds.png';
                    }else if(id4 >= 200 && id4 >= 232) {
                        weatherIcon3.src = '../images/lightning-and-rain.png';
                    }else if(id4 == 600 && id4 <= 622) {
                        weatherIcon3.src = '../images/snow.png';
                    }else if((id4 == 300 && id4 <= 321) || (id4>= 500 && id4 <= 531)){
                        weatherIcon3.src = '../images/cloud-with-rain.png';
                    }
    
        console.log(id, id2, id3, id4)
    },

    search: function(){
        this.fetchWeather(document.querySelector('.search-bar').value)
    }
};

const button = document.querySelector('button');
const weatherContainer = document.querySelector('.weather-container');
const searchBox = document.querySelector('.search')

button.addEventListener('click', function() {
    weather.search()
    weatherContainer.classList.add('container-open')
    searchBox.classList.add('search-open')
})

