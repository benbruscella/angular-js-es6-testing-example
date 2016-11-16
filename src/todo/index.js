import angular           from 'angular';
import uirouter          from 'angular-ui-router';

import { routing }       from './todo.config.js';
import { DEFAULT_TODOS } from './todo.constants.js';

import TodoService       from './todo.service';
import TodoComponent     from './todo.component';
import template          from './todo.component.tpl.html';

export default angular
  .module('main.app.todo', [uirouter])
  .config(routing)
  .component('todoComponent', {
    controller: TodoComponent, template
  })
  .service('TodoService', TodoService)
  .constant('initialTodos', DEFAULT_TODOS)
  .name;
