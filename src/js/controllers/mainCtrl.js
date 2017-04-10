angular.module("App").controller('mainCtrl', function ($scope, quoteService, weatherLocationService, nameService) {


    //this sets up the clock 


    $scope.timeSplit = moment().format('h:mm:A');

    $scope.dayEvents = $scope.timeSplit.split(":");
    console.log("dayEvents", $scope.dayEvents);
    if ($scope.dayEvents[2] === 'AM') {
        if ($scope.dayEvents[0] < 6) {
            $scope.period = "Good afternoon, ";
            console.log("period", $scope.period);
        } else {
            $scope.period = "Good evening, ";
            console.log("period", $scope.period);
        }
        console.log("hello");
    } else {
        $scope.period = "Good morning, ";
        console.log("period", $scope.period);
    }


    // $scope.time = moment().format('h:mm A');
        $scope.time = moment().format('h:mm');



    //this sets up the weather and location
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

    //this sets up the quote
    quoteService.getQuote().then(function (result) {
        console.log("quote", result);
        $scope.quote = result.quote;
        $scope.author = result.author_name;
    })

    $scope.addName = function (name) {
        nameService.store("name", name);
        $scope.name = name;
    }
});