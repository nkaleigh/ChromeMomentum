angular.module("App").service("weatherLocationService", function ($http) {

    // this.getWeather = function () {
    //     return $http.get("http://api.openweathermap.org/data/2.5/weather?zip=84664&appid=61f58e798736a0b567eb6ff992c9c390").then(function(result) {
    //          console.log(result);
    //         return result;

    //     })
    // }
    this.getLocation = function () {
        return $http.get("https://apimk.com/ip?callback=json").then(function (result) {
            console.log('location', result);
            return result.data;

        })
    }
    this.getWeather = function (result) {

        return $http.get("http://api.openweathermap.org/data/2.5/weather?zip=" + result + "&appid=61f58e798736a0b567eb6ff992c9c390&units=imperial").then(function (result) {
            console.log(result);
            return result;

        })
    }
})