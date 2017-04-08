angular.module("App", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state("Dashboard", {
                    url: '/',
                    templateUrl: './views/dashboard.html',
                    controller: 'mainCtrl'
                })
    });