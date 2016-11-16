import angular from 'angular';
import uirouter from 'angular-ui-router';

import { routing } from './counter.config.js';

import CounterComponent from './counter.component';
import template from './counter.tpl.html';

export default angular
  .module('main.app.counter', [uirouter])
  .config(routing)
  .component('counterComponent', { controller: CounterComponent, template })
  .name;
