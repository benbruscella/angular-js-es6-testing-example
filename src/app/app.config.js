export function routing($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/counter');

  $stateProvider
  .state('app', {
      abstract: true,
      template: '<app-component></app-component>'
  })

}
