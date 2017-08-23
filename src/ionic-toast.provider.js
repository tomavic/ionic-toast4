'use strict';
angular.module('ionic-toast.provider', [])

.provider('ionicToast', function() {

    var defaultConfig = {
        timeOut: 4000,
        backgroundToast: 'rgba(0, 0, 0, 0.75)'
    };

    this.configure = function(inputObj) {
        angular.extend(defaultConfig, inputObj);
    };

    function validateColor(color) {
        var regex = /^(?:#(?:[A-Fa-f0-9]{3}){1,2}|(?:rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}|hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*|(?:rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}|hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,)\s*0*(?:\.\d+|1(?:\.0*)?)\s*)[)])$/gm;
        return regex.exec(color);
    };

    this.$get = ['$compile', '$document', '$interval', '$rootScope', '$templateCache', '$timeout',
        function($compile, $document, $interval, $rootScope, $templateCache, $timeout) {

            var provider = {};
            var $scope = $rootScope.$new();

            var defaultionicToast = {
                toastClass: '',
                toastMessage: '',
                toastStyle: {
                    'background-color': '#000',
                    'color': '#fff',
                    'display': 'none'
                }
            };
            $scope.ionicToast = defaultionicToast;

            var toastTemplate = $compile($templateCache.get('ionic-toast/templates/ionic-toast.html'))($scope);
            $document.find('body').append(toastTemplate);

            var toggleDisplayOfToast = function(background, callback) {
                $scope.ionicToast.toastStyle = {
                    'background-color': background
                };
                callback();
            };

            $scope.hideToast = function() {
                $scope.showToast = false;
            };

            provider.show = function(message, timing, background) {


                //validate message string
                if (!message) return;


                //validate duration fallback
                var duration = timing || 4000;
                if (duration > 10000) duration = 10000;

                var delay = parseInt(duration) - 1000;

                //validate background
                if (!validateColor(background)) {
                    background = defaultConfig.backgroundToast;
                }


                angular.extend($scope.ionicToast, {
                    toastMessage: message
                });


                toggleDisplayOfToast(background, function() {

                    $scope.showToast = true;

                    // Simulate loading delay
                    $timeout(function() {

                        $timeout(function() {
                            $scope.showToast = false;
                        }, duration);

                    }, delay);

                });

            };

            provider.hide = function() {
                $scope.hideToast();
            };

            return provider;

        }


    ];
});