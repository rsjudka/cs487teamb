var myScheduleApp = {
    pages: {
        home: 0,
        dashboard: 1,
        schedules: 2,
        aboutUs: 3
    },
    currentPage: null,
    apiURL: null,
    angular: angular.module("myScheduleApp", ["ngRoute", "angular-storage"])
};


myScheduleApp.angular.config(["$locationProvider", function ($locationProvider) {
    //$locationProvider.html5Mode(true);
}]);

myScheduleApp.angular.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "templates/home.html",
            controller: "homeController"
        })
        .when("/home", {
            templateUrl: "templates/home.html",
            controller: "homeController"
        })
        .when("/dashboard", {
            templateUrl: "templates/dashboard.html",
            controller: "dashboardController"
        })
        .when("/about", {
            templateUrl: "templates/about.html"
        })
        .when("/schedules", {
            templateUrl: "templates/schedule.html",
            controller: "scheduleController"
        }).otherwise({
        templateUrl: "templates/404.html"
    });

    //$locationProvider.html5Mode({enabled: true, rewriteLinks: false});

}]);


myScheduleApp.angular.controller('myScheduleController', function ($location, $scope, store, $http) {


    $scope.init = function () {
        $scope.user = {
            token: null,
            name: null,
            email: null,
            phoneNo: null,
            aNo: null,
            bNumber: null,
            city: null,
            community: null
        };

        $scope.communities = null;
        $scope.requireRegister = false;
        $scope.loginOverlay = false;
        $scope.loggedIn = false;
    };

    $scope.go = function ( path ) {
        $location.path( path );
    };

    $scope.onSignIn = function (googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        $scope.user.email = profile.getEmail();
        $scope.user.name = profile.getName();
        $scope.user.token = profile.getId();

        $scope.safeApply(function(){
            $scope.loginSuccess();
        });
    };

    $scope.signOut = function () {
        var auth2 = gapi.auth2.getAuthInstance();

        auth2.signOut().then(function () {
            console.log('User signed out.');
        });

        store.remove('userObject');
        $scope.loggedIn = false;
        $location.path("home");
        $scope.user = null;
        $scope.init();
    };

    $scope.loginSuccess = function () {
        $scope.loggedIn = true;
        console.log("User: ", $scope.user);
        $scope.requireRegister = false;
        $scope.loginOverlay = false;
        store.set('userObject', $scope.user);
    };

    $scope.checkLoggedIn = function () {
        var myUser = store.get('userObject');
        if (myUser) {
            $scope.user = myUser;
            //alert("LOGGED IN");
            $scope.loginSuccess();
        } else {
            //alert("NOT LOGGED IN");
        }
    };

    $scope.checkLoggedIn();

    window.onSignIn = $scope.onSignIn;
    window.signOut = $scope.signOut;

    $scope.register = function () {
        console.log($scope.user);
        altruistApp.requests.register($scope.user, function (response) {
            $scope.safeApply(function () {
                $scope.login();
            })
        });
    };

    $scope.safeApply = function (fn) {
        var phase = this.$root.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function'))
                fn();
        } else
            this.$apply(fn);
    };

    $scope.showLogin = function () {
        $scope.loginOverlay = true;
    };

    $scope.hideLogin = function () {
        $scope.loginOverlay = false;
    };

    $scope.init();
});


myScheduleApp.angular.controller('homeController', function ($scope, $http) {

});