// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('home', {
      url: '/home',
      abstract: true,
      templateUrl: 'templates/home.html'
    })

    // Each tab has its own nav history stack:

    .state('home.overview', {
      url: '/overview',
      views: {
        'home-overview': {
          templateUrl: 'templates/home-overview.html',
          controller: 'OverviewCtrl'
        }
      }
    })

    .state('home.dispatch', {
      url: '/dispatch',
      views: {
        'home-dispatch': {
          templateUrl: 'templates/home-dispatch.html',
          controller: 'DispatchCtrl'
        }
      }
    })

    .state('home.product', {
      url: '/product',
      views: {
        'home-product': {
          templateUrl: 'templates/home-product.html',
          controller: 'ProductCtrl'
        }
      }
    })

    .state('home.warehouse', {
      url: '/warehouse',
      views: {
        'home-warehouse': {
          templateUrl: 'templates/home-warehouse.html',
          controller: 'WarehouseCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/overview');

});
