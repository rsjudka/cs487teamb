var myScheduleApp = {
    pages: {
        home: 0,
        dashboard: 1,
        schedules: 2,
        aboutUs: 3,
        newSchedule: 4
    },
    currentPage: null,
    apiURL: null,
    angular: angular.module("myScheduleApp", ["firebase", "ngRoute", "angular-storage"])
};


function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


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
            templateUrl: "templates/about.html",
            controller: "aboutController"
        })
        .when("/schedules", {
            templateUrl: "templates/schedules.html",
            controller: "scheduleController"
        })
        .when("/newSchedule", {
            templateUrl: "templates/newSchedule.html",
            controller: "newScheduleController"
        }).otherwise({
        templateUrl: "templates/404.html"
    });

}]);


myScheduleApp.angular.controller('myScheduleController', function ($firebaseObject, $location, $scope, store, $http) {

        $scope.init = function () {
            $scope.user = {
                token: null,
                name: null,
                email: null,
                community: null
            };

            $scope.currentSchedule = {
                name: "Untitled Schedule",
                creditHours: 0,
                timeSaved: "Not Saved"
            };


            $scope.overlays = {
                viewSchedules: 0,
                viewDrafts: 1,
                scheduleWizard: 2,
                selectClasses: 3
            };

            $scope.overlayShow = {
                overlay: false,
                pages: [
                    false,
                    false,
                    false,
                    false
                ]
            };

            $scope.requireRegister = false;
            $scope.loginOverlay = false;
            $scope.loggedIn = false;
            $scope.currentPageName = null;
            $scope.alertMessage = false;
            $scope.pullMenu = false;
        };

        $scope.resetOverlays = function(){
            $scope.overlayShow = {
                overlay: false,
                pages: [
                    false,
                    false,
                    false,
                    false
                ]
            };
        };

        $scope.viewSavedSchedule = function(schedule){
            $scope.currentSchedule = schedule;
            $scope.resetOverlays();
            $scope.go('newSchedule');
        };

        $scope.getColor = function (item, index) {
            if (item === index) return " selectdOption";
            else return "";
        };

        $scope.showOverlay = function (overlay) {
            $scope.safeApply(function () {
                for (var i = 0; i < $scope.overlayShow.pages.length; i++) $scope.overlayShow.pages[i] = false;
                $scope.overlayShow.pages[overlay] = true;
                $scope.overlayShow.overlay = true;
            });
        };

        $scope.closeOverlay = function () {
            $scope.overlayShow.overlay = false;
        };

        $scope.currentPage = function () {
            switch (myScheduleApp.currentPage) {
                case myScheduleApp.pages.home:
                    $scope.currentPageName = "Home";
                    break;
                case myScheduleApp.pages.newSchedule:
                    $scope.currentPageName = "Create New Schedule";
                    break;
                case myScheduleApp.pages.dashboard:
                    $scope.currentPageName = "Dashboard";
                    break;
                case myScheduleApp.pages.aboutUs:
                    $scope.currentPageName = "About Us";
                    break;
                case myScheduleApp.pages.schedules:
                    $scope.currentPageName = "Schedules";
                    break;
            }

            return $scope.currentPageName;
        };

        $scope.toggleMenu = function () {
            $scope.pullMenu = !$scope.pullMenu;
        };

        $scope.go = function (path) {
            $location.path(path);
            $scope.pullMenu = false;
        };

        $scope.showAlert = function (message, time) {
            $scope.alertMessage = message;
            setTimeout(function () {
                $scope.safeApply(function () {
                    $scope.alertMessage = false;
                });
            }, time);
        };

        $scope.onSignIn = function (googleUser) {
            var profile = googleUser.getBasicProfile();
            //console.log('Google Profile: ', profile);
            $scope.user.email = profile.getEmail();
            $scope.user.name = profile.getName();
            $scope.user.token = profile.getId();

            $scope.safeApply(function () {
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

            $scope.safeApply(function () {
                $scope.showAlert("Logged Out", 3000);
            });

        };

        $scope.loginSuccess = function () {
            $scope.loggedIn = true;
            //console.log("User: ", $scope.user);
            $scope.requireRegister = false;
            $scope.loginOverlay = false;
            store.set('userObject', $scope.user);

            var usersRef = firebase.database().ref().child("users");
            usersRef.once('value', function (snap) {
                var userExists = false;
                snap.forEach(function (childSnap) {
                    var user = childSnap.val();
                    if ($scope.user.token === user.token) userExists = true;
                });

                if (userExists) {
                    console.log("User Exists");
                    $scope.safeApply(function () {
                        $scope.showAlert("Welcome back, " + $scope.user.name.split(" ")[0], 3000);
                    });
                } else {
                    usersRef.push($scope.user);
                    console.log("User Added");
                    $scope.safeApply(function () {
                        $scope.showAlert("New account created", 3000);
                    });
                }
            });
        };

        $scope.checkLoggedIn = function () {
            var myUser = store.get('userObject');
            if (myUser) {
                $scope.user = myUser;
            }
        };

        $scope.checkLoggedIn();

        window.onSignIn = $scope.onSignIn;
        window.signOut = $scope.signOut;

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
    }
);


myScheduleApp.angular.controller('homeController', function ($scope, $http) {
    $scope.init = function () {
        myScheduleApp.currentPage = myScheduleApp.pages.home;
    };

    $scope.init();
});

myScheduleApp.angular.controller('aboutController', function ($scope, $http) {
    $scope.init = function () {
        myScheduleApp.currentPage = myScheduleApp.pages.aboutUs;
    };

    $scope.init();
});

myScheduleApp.angular.controller('scheduleController', function ($scope, store, $http) {
    $scope.init = function () {
        myScheduleApp.currentPage = myScheduleApp.pages.schedules;

        $scope.mySchedules = [];
        $scope.myDraftSchedules = [];

        var myUser = store.get('userObject');
        if (myUser) $scope.user = myUser;

        $scope.getSchedules();
    };


    $scope.deleteSavedSchedule = function (sid) {
        var schedulesRef = firebase.database().ref().child("schedules");
        schedulesRef.once('value', function (snap) {
            snap.forEach(function (childSnap) {
                if (schedule.sid === sid) {
                    schedulesRef.child(childSnap.key).remove();
                    $scope.init();
                }
            });
        });

        console.log("Schedule Removed");
        $scope.safeApply(function () {
            $scope.showAlert("Schedule deleted", 3000);

        });
    };


    $scope.deleteDraftSchedule = function (sid) {
        var schedulesRef = firebase.database().ref().child("drafts");
        schedulesRef.once('value', function (snap) {
            snap.forEach(function (childSnap) {
                if (schedule.sid === sid) {
                    schedulesRef.child(childSnap.key).remove();
                    $scope.init();
                }
            });
        });

        console.log("Schedule Removed");
        $scope.safeApply(function () {
            $scope.showAlert("Schedule deleted", 3000);

        });
    };

    $scope.getSchedules = function () {
        var schedulesRef = firebase.database().ref().child("schedules");
        schedulesRef.once('value', function (snap) {
            $scope.safeApply(function () {
                snap.forEach(function (childSnap) {
                    var schedule = childSnap.val();
                    if ($scope.user.token === schedule.userToken)
                        $scope.mySchedules.push(schedule);
                });
            });
        });

        var schedulesRef = firebase.database().ref().child("drafts");
        schedulesRef.once('value', function (snap) {
            $scope.safeApply(function () {
                snap.forEach(function (childSnap) {
                    var schedule = childSnap.val();
                    if ($scope.user.token === schedule.userToken)
                        $scope.myDraftSchedules.push(schedule);
                });
            });
        });
    };

    $scope.init();
});

function clean(variable) {
    return JSON.parse(angular.toJson(variable));
}

myScheduleApp.angular.controller('newScheduleController', function ($scope, store, $window, $http) {
    $scope.init = function () {


        $scope.schedulefirebaseToken = null;

        var myUser = store.get('userObject');
        if (myUser) {
            $scope.user = myUser;
        }


        $scope.wizardParams = {
            credits: null,
            difficulty: null,
            times: [false, false, false, false, false],
            optimize: [false, false, false, false, false]
        };

        /* $scope.currentSchedule = {
            name: "Untitled Schedule",
            creditHours: 0,
            timeSaved: "Not Saved",
            userToken: $scope.user.token,
            sunday: [],
            monday: [
                {
                    title: "Introduction to Algorithms",
                    subject: "CS",
                    course: 430,
                    CRN: 20047,
                    section: "01",
                    location: "MC",
                    credits: 3,
                    timeSlot: [2],
                    classType: "normal",
                    requires: 28173,
                    professor: "Edward M Reingold"
                },
                {
                    title: "Technical Communication",
                    subject: "COM",
                    course: 421,
                    CRN: 21008,
                    section: "01",
                    location: "MC",
                    credits: 3,
                    timeSlot: [3],
                    classType: "normal",
                    requires: null,
                    professor: "Andrew J Roback"
                },
                {
                    title: "Computer Organization & Assembler Programming",
                    subject: "CS",
                    course: 350,
                    CRN: 20033,
                    section: "01",
                    location: "MC",
                    credits: 3,
                    timeSlot: [4],
                    classType: "normal",
                    requires: 22642,
                    professor: "Kyle C Hale"
                }
            ],
            tuesday: [
                {
                    title: "Data Mining",
                    subject: "CS",
                    course: 422,
                    CRN: 28859,
                    section: "01",
                    location: "MC",
                    credits: 3,
                    timeSlot: [6, 7],
                    classType: "normal",
                    requires: null,
                    professor: "Vijay Kumar Gurbani"
                }
            ],
            wednesday: [
                {
                    title: "Introduction to Algorithms",
                    subject: "CS",
                    course: 430,
                    CRN: 20047,
                    section: "01",
                    location: "MC",
                    credits: 3,
                    timeSlot: [2],
                    classType: "normal",
                    requires: 28173,
                    professor: "Edward M Reingold"
                },
                {
                    title: "Technical Communication",
                    subject: "COM",
                    course: 421,
                    CRN: 21008,
                    section: "01",
                    location: "MC",
                    credits: 3,
                    timeSlot: [3],
                    classType: "normal",
                    requires: null,
                    professor: "Andrew J Roback"
                },
                {
                    title: "Computer Organization & Assembler Programming",
                    subject: "CS",
                    course: 350,
                    CRN: 20033,
                    section: "01",
                    location: "MC",
                    credits: 3,
                    timeSlot: [4],
                    classType: "normal",
                    requires: 22642,
                    professor: "Kyle C Hale"
                }
            ],
            thursday: [
                {
                    title: "Database Organization",
                    subject: "CS",
                    course: 425,
                    CRN: 20044,
                    section: "01",
                    location: "MC",
                    credits: 3,
                    timeSlot: [6, 7],
                    classType: "normal",
                    requires: null,
                    professor: "Omar Aldawud"
                }
            ],
            friday: [
                {
                    title: "(Recitation) Introduction to Algorithms",
                    subject: "CS",
                    course: 430,
                    CRN: 28173,
                    section: "R01",
                    location: "MC",
                    credits: 0,
                    timeSlot: [2],
                    classType: "shortened",
                    requires: 20047,
                    professor: "Edward M Reingold"
                }
            ],
            saturday: []
        };*/

        $scope.colors = [
            {background: "#EE534F", color: "#FFFFFF"},
            {background: "#FFA827", color: "#FFFFFF"},
            {background: "#9DCC64", color: "#FFFFFF"},
            {background: "#AA47BC", color: "#FFFFFF"},
            {background: "#5C6AC0", color: "#FFFFFF"},
            {background: "#29B6F6", color: "#FFFFFF"},
            {background: "#FFEE58", color: "#000000"},
        ];

        $scope.timeSlots = [
            {start: "08:35 AM", end: "09:50 AM"},
            {start: "10:00 AM", end: "11:15 AM"},
            {start: "11:15 AM", end: "12:40 PM"},
            {start: "01:50 PM", end: "03:05 PM"},
            {start: "03:15 PM", end: "04:30 PM"},
            {start: "05:00 PM", end: "06:15 PM"},
            {start: "06:25 PM", end: "07:40 AM"},
            {start: "07:50 PM", end: "09:05 PM"}
        ];

        myScheduleApp.currentPage = myScheduleApp.pages.newSchedule;

        $scope.selectedClasses = [];

        //$scope.processSchedule();

        $http.get('data/classes.json')
            .then(function (response) {
                $scope.safeApply(function () {
                    $scope.classes = response.data;
                    //console.log($scope.classes);
                });
            });

        $http.get('data/professors.json')
            .then(function (response) {
                $scope.safeApply(function () {
                    $scope.professors = response.data;
                    //console.log($scope.professors);
                });
            });
    };

    $scope.test = function () {
        console.log($scope.selectedClasses);
    };

    $scope.updateOptimize = function (index) {
        $scope.wizardParams.optimize[index] = !$scope.wizardParams.optimize[index];
    };

    $scope.updateDifficulty = function (index) {
        $scope.wizardParams.difficulty = index;
    };

    $scope.updateCredits = function (index) {
        $scope.wizardParams.credits = index;
    };

    $scope.updateTimes = function (index) {
        $scope.wizardParams.times[index] = !$scope.wizardParams.times[index];
    };


    $scope.generateSchedule = function () {
        console.log($scope.wizardParams);
        //console.log();

        $scope.closeOverlay();
        $scope.currentSchedule = generateSchedule($scope.selectedClasses, $scope.professors, $scope.wizardParams);
        console.log($scope.currentSchedule);
        $scope.processSchedule();
        console.log($scope.currentSchedule);

        $scope.currentSchedule.timeSaved = "Not Saved";
        $scope.currentSchedule.userToken = $scope.user.token;

    };

    $scope.iterateTimes = function (day, classes) {

        // INITIALIZE ALL SLOTS AS EMPTY
        var slots = [0, 1, 2, 3, 4, 5, 6, 7];

        // FIND TIMES OF CLASSES
        for (var i = 0; i < 7; i++) {
            if (day[i]) {
                day[i].times = $scope.getTimeSlot(day[i]);
                var classCode = day[i].subject + " " + day[i].course;
                if (classes.indexOf(classCode) === -1)
                    classes.push(classCode);

                // INIT AS NOT SPACER
                day[i].spacer = false;

                // INIT BOX SIZE
                if (day[i].classType === "shortened")
                    day[i].boxSize = "smallBox";
                else if (day[i].timeSlot.length === 1)
                    day[i].boxSize = "normalBox";
                else if (day[i].timeSlot.length > 1)
                    day[i].boxSize = "x" + day[i].timeSlot.length + "Box";

                // MARK SLOT AS FULL | REMOVE FROM SLOTS ARRAY
                for (var j = 0; j < day[i].timeSlot.length; j++) {
                    var index = slots.indexOf(day[i].timeSlot[j]);
                    slots.splice(index, 1);
                }
            }
        }

        // ADD EMPTY SLOTS
        for (var i = 0; i < 7; i++) {
            if (slots.indexOf(i) !== -1) {
                var emptyClass = {
                    spacer: true,
                    timeSlot: [i]
                };

                day.push(emptyClass);
            }
        }

        console.log(day);

        // SORT ACCORDING TO TIMESLOT POSITION
        for (var i = 0; i < day.length - 1; i++) {
            for (var j = 0; j < day.length - i - 1; j++) {
                var timeSlotCompare1, timeSlotCompare2;

                if (day[j].timeSlot.length > 1) timeSlotCompare1 = day[j].timeSlot[0];
                else timeSlotCompare1 = day[j].timeSlot;

                if (day[j + 1].timeSlot.length > 1) timeSlotCompare2 = day[j + 1].timeSlot[0];
                else timeSlotCompare2 = day[j + 1].timeSlot;

                if (timeSlotCompare1 > timeSlotCompare2) {
                    var temp = day[j];
                    day[j] = day[j + 1];
                    day[j + 1] = temp;
                }
            }
        }

        //console.log("Empty Slots: ", slots);
    };

    $scope.iterateColors = function (day) {
        for (var i = 0; i < day.length; i++) {
            if (day[i].title) {
                var classCode = day[i].subject + " " + day[i].course;
                day[i].color = $scope.colors[$scope.myClasses.indexOf(classCode)];
            }
        }
    };

    $scope.saveSchedule = function () {
        $scope.currentSchedule.timeSaved = new Date();
        $scope.currentSchedule.sid = makeid();
        var schedulesRef = firebase.database().ref().child("schedules");

        schedulesRef.child($scope.schedulefirebaseToken + "").once('value', function (snap) {
            if (snap.exists()) {
                console.log("Schedule Updated");
                schedulesRef.child($scope.schedulefirebaseToken + "").update(clean(($scope.currentSchedule)));
            } else {
                $scope.schedulefirebaseToken = (schedulesRef.push(clean($scope.currentSchedule))).key;
                console.log("Schedule Added");
            }

            $scope.safeApply(function () {
                $scope.showAlert("Schedule saved", 3000);
            });
        });
    };

    $scope.resetSchedule = function(){

        $scope.currentSchedule = {
            name: "Untitled Schedule",
            creditHours: 0,
            timeSaved: "Not Saved"
        };

        $scope.safeApply(function () {
            $scope.showAlert("Schedule reset", 3000);
        });

    };

    $scope.doneSchedule = function () {

        if ($scope.currentSchedule.timeSaved === "Not Saved") {
            $scope.currentSchedule.timeSaved = new Date();
            var schedulesRef = firebase.database().ref().child("drafts");

            schedulesRef.child($scope.schedulefirebaseToken + "").once('value', function (snap) {
                if (snap.exists()) {
                    console.log("Schedule Updated");
                    schedulesRef.child($scope.schedulefirebaseToken + "").update(clean(($scope.currentSchedule)));
                } else {
                    $scope.schedulefirebaseToken = (schedulesRef.push(clean($scope.currentSchedule))).key;
                    console.log("Schedule Added");
                }

                $scope.safeApply(function () {
                    $scope.showAlert("Draft saved", 3000);
                    $scope.go("schedules");
                });
            });
        } else {
            $scope.go("schedules");
        }
    };

    $scope.deleteSchedule = function () {
        var schedulesRef = firebase.database().ref().child("schedules");
        schedulesRef.child($scope.schedulefirebaseToken + "").remove();
        console.log("Schedule Removed");
        $scope.currentSchedule.timeSaved = "Not Saved";
        $scope.go("/schedules");

        $scope.currentSchedule = {
            name: "Untitled Schedule",
            creditHours: 0,
            timeSaved: "Not Saved"
        };

        $scope.safeApply(function () {
            $scope.showAlert("Schedule deleted", 3000);
        });
    };

    $scope.processSchedule = function () {

        $scope.myClasses = [];
        $scope.creditClasses = [];

        $scope.iterateTimes($scope.currentSchedule.sunday, $scope.myClasses);
        $scope.iterateTimes($scope.currentSchedule.monday, $scope.myClasses);
        $scope.iterateTimes($scope.currentSchedule.tuesday, $scope.myClasses);
        $scope.iterateTimes($scope.currentSchedule.wednesday, $scope.myClasses);
        $scope.iterateTimes($scope.currentSchedule.thursday, $scope.myClasses);
        $scope.iterateTimes($scope.currentSchedule.friday, $scope.myClasses);
        $scope.iterateTimes($scope.currentSchedule.saturday, $scope.myClasses);

        $scope.iterateColors($scope.currentSchedule.sunday, $scope.myClasses);
        $scope.iterateColors($scope.currentSchedule.monday, $scope.myClasses);
        $scope.iterateColors($scope.currentSchedule.tuesday, $scope.myClasses);
        $scope.iterateColors($scope.currentSchedule.wednesday, $scope.myClasses);
        $scope.iterateColors($scope.currentSchedule.thursday, $scope.myClasses);
        $scope.iterateColors($scope.currentSchedule.friday, $scope.myClasses);
        $scope.iterateColors($scope.currentSchedule.saturday, $scope.myClasses);

        //console.log($scope.myClasses);
    };

    $scope.getTimeSlot = function (myClass) {
        var classTime = "";

        var startTime = $scope.timeSlots[myClass.timeSlot[0]] + " ";

        var classStartPieces = startTime.split(" ");
        var classStartPiecesTime = classStartPieces[0].split(":");
        var shortenedEnd = (Math.floor(classStartPiecesTime[0] + 5 / 6));

        if (shortenedEnd > 12)
            shortenedEnd -= 12, classStartPieces[1] = "PM";
        shortenedEnd = shortenedEnd + ":" + (classStartPieces[1] + 50) % 60 + " " + classStartPieces[1];


        if (myClass.classType === "shortened")
            classTime = $scope.timeSlots[myClass.timeSlot[0]].start + " - " + shortenedEnd;
        if (myClass.timeSlot.length > 1)
            classTime = $scope.timeSlots[myClass.timeSlot[0]].start + " - " + $scope.timeSlots[myClass.timeSlot[myClass.timeSlot.length - 1]].end;
        else if (myClass.timeSlot.length === 1)
            return $scope.timeSlots[myClass.timeSlot[0]].start + " - " + $scope.timeSlots[myClass.timeSlot[0]].end;
        else
            return "Time Error";

        return classTime;
    };

    $scope.init();
});

myScheduleApp.angular.controller('dashboardController', function (store, $scope, $http) {
    //Need User Details

    $scope.init = function () {
        $scope.user = store.get("userObject");
        myScheduleApp.currentPage = myScheduleApp.pages.dashboard;
    };

    $scope.init();
});
