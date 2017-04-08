angular.module("App").controller('mainCtrl', function ($scope, quoteService, weatherLocationService) {

    var newTime = new Date();
    console.log("newTime", newTime);

    $scope.time = moment(newTime).format('hh:mm a');
    console.log("time", $scope.time);
    // $scope.newTime = getHours();


    weatherLocationService.getLocation().then(function (result) {
        $scope.location = result.zip;
        console.log("location", $scope.location);

        weatherLocationService.getWeather($scope.location).then(function (result) {
            $scope.temp = Math.floor(result.data.main.temp);
            console.log($scope.temp);
            $scope.city = result.data.name;
            console.log("name", $scope.city);
        })
    })

    quoteService.getQuote().then(function (result) {
        console.log("quote", result);
        $scope.quote = result.quote;
        $scope.author = result.author_name;
    })


});