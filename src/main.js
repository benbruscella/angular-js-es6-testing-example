// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

// 3rd party modules
//import bootstrap from 'bootstrap';
import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularUiBootstrap from 'angular-ui-bootstrap';

// Modules
import app     from './app';
import common  from './common';
import counter from './counter';
import todo    from './todo';

angular.module('main', [
    angularAnimate,
    angularUiBootstrap,
    app,
    common,
    counter,
    todo
]);

angular.element(document).ready(() => {
    angular.bootstrap(document, ['main']);
});
