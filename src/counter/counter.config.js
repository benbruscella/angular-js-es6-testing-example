export function routing($stateProvider) {

  $stateProvider
    .state('app.counter', {
      url: '/counter',
      template: '<counter-component></counter-component>'
    });
}