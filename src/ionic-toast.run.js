'use strict';
angular.module('ionic-toast')

  .run(['$templateCache', function ($templateCache) {
    var toastTemplate = 
	'<div class="ionic_toast">' +
		'<div class="toast_section fadein fadeout" ng-show="showToast" ng-class="ionicToast.toastClass" ng-style="ionicToast.toastStyle"  ng-click="hideToast()">' +
			'<span ng-bind-html="ionicToast.toastMessage"></span>' +
		'</div>' +
    '</div>';

    $templateCache.put('ionic-toast/templates/ionic-toast.html', toastTemplate);
  }]);