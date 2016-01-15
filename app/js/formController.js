angular.module("main.controller", [])
    .controller('userController', function ($scope) {
    $scope.user = {};
    $scope.profileNew = {};
    $scope.allProfile = [];
    $scope.profile = [];
    $scope.hello = function (abc) {
        $scope.profile = angular.copy($scope.user);
        console.log(abc);
        console.log($scope.profile);
        if (abc == true) {
            $scope.allProfile.push($scope.profile);
            $scope.initialize();
            $scope.myForm.$setPristine();
            $scope.profileSuccess = true;
            $scope.err = false;
        } else {
            $scope.err = true;
            $scope.ageErr = true;
        }
    };

    $scope.formValid = function (fvalid) {
        if (fvalid == true) {
            $scope.sibInfo = true;
        } else {
            $scope.err = true;
            $scope.sibInfo = false;
        }
    };

    $scope.sibsChanged = function () {

    };

    $scope.noChild = function () {
        if ($scope.user.child == 0) {
            $scope.childErr = 'has-error';
            $scope.ageError = true;
            $scope.err = false;
        } else {
            $scope.childErr = '';
            $scope.ageError = false;
            $scope.err = false;
        }
    };

    $scope.noNoOfChilds = function () {
        if ($scope.user.noOfChilds == "") {
            $scope.noOfChildsErr = 'has-error';
            $scope.ageError = true;
            $scope.err = false;
        } else {
            $scope.noOfChildsErr = '';
            $scope.ageError = false;
            $scope.err = false;
        }
    };

    $scope.dteChange = function () {
        var today = new Date();
        $scope.err = false;

        if ($scope.user.dt > today) {
            $scope.user.dt = today;
            alert("Invalid Age");
        } else {
            var year = $scope.user.dt.getFullYear();
            var month = $scope.user.dt.getMonth() + 1;
            var day = $scope.user.dt.getDate();

            var yr = moment(today).format("YYYY");
            var mon = moment(today).format("MM");
            var d = moment(today).format("DD");

            var yrAge = yr - year;
            var monAge = mon - month;

            if (yrAge == 0) {
                $scope.user.age = 0;
            } else {
                if (mon == month) {
                    if (d >= day) {
                        $scope.user.age = yrAge;
                    } else if (d < day) {
                        $scope.user.age = yrAge - 1;
                    }
                } else if (mon > month) {
                    $scope.user.age = yrAge;
                } else if (mon < month) {
                    $scope.user.age = yrAge - 1;
                }
            }
            if (d == day && mon == month) {
                alert("Happy Birthday!!");
            }
        }
        $scope.dt = moment($scope.dt).format("DD-MM-YYYY");
        $scope.ageVerification();
    };

    $scope.initialize = function () {
        $scope.user.fname = '';
        $scope.user.lname = '';
        $scope.user.mob = '';
        $scope.user.email = '';
        $scope.user.birth = '';
        $scope.user.noOfChilds = '';
        $scope.user.dt = '';
        $scope.user.age = '';
        $scope.basicInfo = '';
        $scope.user.noOfSibs = '0';
        /*$scope.viewAll = '';*/
        $scope.user.mStatus = '0';
        $scope.user.creator = '0';
        $scope.user.gen = 'male';
        $scope.user.medium = 'cash';
        $scope.user.child = '0';
        $scope.enableSave = false;
        $scope.editItem = false;
        $scope.delItem = false;
        $scope.viewItem = false;
        $scope.sibInfo = true;
    };

    $scope.edit = function (item, index) {
        $scope.user = item;
        $scope.allProfile.splice(index, 1);
        var len = $scope.allProfile.length;
        if (len > 0) {
            $scope.profileSuccess = true;
        } else {
            $scope.profileSuccess = false;
        }
        $scope.ageError = true;
        $scope.editItem = true;
        $scope.delItem = true;
        $scope.viewItem = true;
        $scope.enableSave = true;
    };

    $scope.delete = function (item, index) {
        $scope.allProfile.splice(index, 1);
        var len = $scope.allProfile.length;
        if (len > 0) {
            $scope.profileSuccess = true;
        } else {
            $scope.profileSuccess = false;
        }
    };

    $scope.view = function (item, index) {
        $scope.viewAll = item;
        console.log($scope.viewAll);
    };

    $scope.save = function (abc) {
        console.log(abc);
        $scope.hello(true);
        $scope.editItem = false;
        $scope.delItem = false;
        $scope.viewItem = false;
    };

    $scope.ageVerification = function () {
        var ageMale = 21;
        var ageFemale = 18;
        if ($scope.user.gen == "male" || $scope.user.gen == "female" && $scope.user.age != "") {
            if ($scope.user.gen == "male" && $scope.user.age < ageMale) {
                $scope.ageError = true;
                $scope.ageErr = 'has-error';
            } else {
                /*$scope.ageError = false;*/
                if ($scope.user.gen == "female" && $scope.user.age < ageFemale) {
                    $scope.ageError = true;
                    $scope.ageErr = 'has-error';
                } else {
                    $scope.ageError = false;
                    $scope.ageErr = 'has-success';
                }
            }
        }
    };
    $scope.today = function () {
        $scope.user.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.user.dt = null;
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 1
    };
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})