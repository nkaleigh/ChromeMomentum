angular.module("App").service("quoteService", function ($http) {

    this.getQuote = function () {
        return $http.get("https://apimk.com/motivationalquotes?get_all_quote=yes").then(function (result) {
            var length = result.data.length;
            console.log("length", length);
            var ranNum = Math.floor(Math.random() * length);
            console.log("ranNum", ranNum);
            return result.data[ranNum];
        })
    }


});