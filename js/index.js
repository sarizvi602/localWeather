$(document).ready(function() {

  var long;
  var lat;
  var farTemp;
  var celTemp;

  $.getJSON('http://ip-api.com/json', function(data) {
    //api url to get latitude and longitude for current location
    lat = data.lat;
    long = data.lon;
    //api url to get weather date.Thanks to OpenWeatherMap
    var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=9b09be22aaf94f062bdbad8b0f61724d';

    $.getJSON(api, function(data) {
      //JSON call for Open Weather API
      var weatherType = data.weather[0].description;

      var iconCode = data.weather[0].icon; //get icon code
      var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png"; //icon image from openweathermap
      $("#icon").html("<img src='" + iconUrl + "'>");

      var kelTemp = data.main.temp; //temperature in kelvin
      var windSpeed = data.wind.speed.toFixed(1); //wind speed in mph
      var city = data.name; //name of city
      var country = data.sys.country; //country's abbreviation

      celTemp = (kelTemp - 273.15).toFixed(1); //convert it to celsius
      farTemp = ((kelTemp - 273.15) * (9 / 5) + 32).toFixed(1); //convert it to fahrenheit
      $("#city").html(city + ", " + country); // display it
      $("#weatherType").html(weatherType);
      $("#Temp").html(farTemp + " &deg;F");

      var tempChange;
      $("#tempChange").change(function() {
        if (tempChange === false) { //convert to F
          $("#Temp").html(farTemp + " &deg;F");
          tempChange = true;
        } else { //convert to C
          $("#Temp").html(celTemp + " &deg;C");
          tempChange = false;
        }
      });
      windSpeed = (2.23694 * windSpeed).toFixed(1);
      $("#windSpeed").html(windSpeed + " mph");
      //change background image using icon code
      if (iconCode == "01d") {
        $("body").css('background-image', 'url(https://crystalseye.files.wordpress.com/2011/08/dsc_0724.jpg)'); //clear sky daytime
      } else if (iconCode == "01n") {
        $("body").css('background-image', 'url(https://scienerf.files.wordpress.com/2012/05/137.jpg)'); //clear sky nighttime
      } else if (iconCode == "02d") {
        $("body").css('background-image', 'url(http://thegirlbythesea.com/wp-content/uploads/2010/05/cloud-alligator.jpg)'); //few clouds daytime
      } else if (iconCode == "02n") {
        $("body").css('background-image', 'url(http://www.drahtphotography.com/wp-content/uploads/2015/05/sampleIMG_3642.jpg)'); //few clouds nighttime
      } else if (iconCode == "03d") {
        $("body").css('background-image', 'url(https://c1.staticflickr.com/3/2106/1909487867_de140c7eb8_b.jpg)'); //scattered clouds daytime
      } else if (iconCode == "03n") {
        $("body").css('background-image', 'url(https://bdn-data.s3.amazonaws.com/uploads/2013/02/4101-600x399.jpg)'); //scattered clouds nighttime
      } else if (iconCode == "04d") {
        $("body").css('background-image', 'url(http://johnsonmatel.com/2011/October/Rainy_DAY/Big_sky.jpg)'); //broken clouds daytime
      } else if (iconCode == "04n") {
        $("body").css('background-image', 'url(http://orig04.deviantart.net/7a85/f/2013/234/3/8/full_moon___cloudy_night__magic_by_radutataru-d6j8z3m.jpg)'); //broken clouds nighttime
      } else if (iconCode == "09d") {
        $("body").css('background-image', 'url(http://images.gmanews.tv/v3/webpics/v3/2014/11/640_2014_11_13_14_27_13.jpg)'); //shower rain daytime
      } else if (iconCode == "09n") {
        $("body").css('background-image', 'url(https://i.ytimg.com/vi/I-reEErtJKo/maxresdefault.jpg)'); //shower rain nighttime
      } else if (iconCode == "10d") {
        $("body").css('background-image', 'url(http://charukriti.org/wp-content/uploads/2014/06/rain.jpg)'); //rain daytime
      } else if (iconCode == "10n") {
        $("body").css('background-image', 'url(http://img.dunyanews.tv/news/2016/January/01-18-16/news_big_images/318342_12580530.jpg)'); //rain nighttime
      } else if (iconCode == "11d") {
        $("body").css('background-image', 'url(http://3.bp.blogspot.com/-pHv5T4iewKA/UaMN86nf4lI/AAAAAAAAAhg/G2JSWQNEfrU/s1600/1.png)'); //thunderstorm daytime
      } else if (iconCode == "11n") {
        $("body").css('background-image', 'url(https://i.ytimg.com/vi/lxSzLIbhB_A/maxresdefault.jpg)'); //thunderstorm nighttime
      } else if (iconCode == "13d") {
        $("body").css('background-image', 'url(https://static.pexels.com/photos/27449/pexels-photo-27449.jpg)'); //snow daytime
      } else if (iconCode == "13n") {
        $("body").css('background-image', 'url(https://s-media-cache-ak0.pinimg.com/originals/26/30/2d/26302d985e616a103b9b04ee783258f9.jpg)'); //snow nighttime
      } else if (iconCode == "50d") {
        $("body").css('background-image', 'url(http://2.bp.blogspot.com/-ZS_R5b95SQw/VgBjqqJCQwI/AAAAAAAAIHE/8DHNIOVf-0E/s1600/100_2235.JPG)'); //mist daytime
      } else if (iconCode == "50n") {
        $("body").css('background-image', 'url(https://i.ytimg.com/vi/V0dEAmRA1PQ/maxresdefault.jpg)'); //mist nighttime
      }

    });
  });
});