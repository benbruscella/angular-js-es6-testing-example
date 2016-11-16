export function routing($stateProvider) {

    $stateProvider
        .state('app.todo', {
            url: '/todo',
            template: '<todo-component></todo-component>'
        });
}
