[![bitHound Score](https://www.bithound.io/github/rajeshwarpatlolla/ionic-toast/badges/score.svg)](https://www.bithound.io/github/rajeshwarpatlolla/ionic-toast)

## Introduction:

This is an `ionic-toast4` bower component which can be used with any Ionic framework's application.
This repo has been forked from original `ionic-toast`


## Prerequisites.

**1)** node.js, bower and gulp.

## How to use:

**1)** In your project repository install the ionic-toast using bower

    bower install ionic-toast4 --save
	
    npm install ionic-toast4 --save	

This will install the latest version released. If you wish to install a specific version please use `bower install ionic-toast#<version number>`

**2)** Give the path of `ionic-toast.bundle.min.js` in your `index.html` file.

````html
<!-- path to ionic / angularjs files-->
<script src="lib/ionic-toast/dist/ionic-toast.bundle.min.js"></script>
````

**3)** In your application module inject the dependency `ionic-toast`, in order to work with the ionic toast.

````javascript
angular.module('mainModuleName', ['ionic', 'ionic-toast']){
 //
}
````

**4)** Inject 'ionicToast' in your controller.

````javascript
.controller('HomeCtrl', ['$scope', 'ionicToast', function($scope, ionicToast) {
  //code here
}])
````

**5)** In your template, you can use like below

````html
<button class="button button-block" ng-click="showToast()">Show Toast at top with close</button>
````

**6)** In your controller you have to define a function like below to show the toast

````javascript
$scope.showToast = function(){
<!-- ionicToast.show(message, position, stick, time); -->
  ionicToast.show('This is a toast at the top.', 2500, '#42b');
};
````

The arguments are as follows. The order of arguments should not be changed.

a) `message` is the first argument, which takes any string message.

b) `timeout`(Optional) is the fourth argument, which takes time in milliseconds. If the value is greater than 5000, then it will be considered as 5000(5 seconds) only. The default value is 4000 milli seconds.

c) `background`(Optional) is the fifth argument, which takes the background color in hexadecimal, rgb() or rgba(). If the value is null the background color is `rgba(0, 0, 0, 0.75)`.

**7)** In your controller you have to define a function like below to hide the toast

````javascript
$scope.hideToast = function(){
  ionicToast.hide();
};
````


## Screen Shots:

Once you are successfully done with the above steps, you should be able to see the below screen shots.
I have used three buttons here.

The first screen shot shows only the buttons before clicking on them.
Once you click on the button you should see the remaining screen shots.

![ionic-toast buttons](https://lh3.googleusercontent.com/Fc4fUe9_k6DktTMoNrpih_z5sSNoZs9XHuiyn4AcClw=w320-h568-no "ionic-toast buttons")
![ionic-toast top](https://lh3.googleusercontent.com/VDO5p9Z9KH6tC7zpTTk6mbkchKKBA4VYWpZuqLp9Jzc=w320-h568-no "ionic-toast top")
![ionic-toast middle](https://lh3.googleusercontent.com/J7n3YRhRx68hIQmKLRJEKq6QfkxkAD7y_Jqc9eFDOtk=w320-h568-no "ionic-toast middle")
![ionic-toast bottom](https://lh3.googleusercontent.com/MQyAFN9S8d8Pd05XALFcuhPiY_LNlKEIS9yWh-WKTh0=w320-h568-no "ionic-toast bottom")

## Versions:

### 1) v1.0.0
The whole `ionic-toast4` component functionality has been implemented, and it can be installed with the command `bower install ionic-toast4 --save` or via `npm install ionic-toast4 --save`


## Contact:
Email : hbasheer@live.com

