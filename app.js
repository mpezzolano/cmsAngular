angular.module("app", ["ui.router"])

    .config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state("home",{
                url: "/home",
                templateUrl: "templates/home.html",
                controller: "homeCtrl"
            })
            .state("login",{
                url: "/login",
                templateUrl: "templates/login.html",
                controller: "loginCtrl"
            })
            .state("users",{
                url: "/users",
                templateUrl: "templates/users.html",
                controller: "usersCtrl"
            })

        $urlRouterProvider.otherwise("/");
    })

    .controller("homeCtrl", function()
    {

    })


    .controller("loginCtrl", function($scope,$state)
    {
        $scope.goHome = function(){
            $state.go("home");
        }


    })

    .controller("usersCtrl", function()
    {

    })