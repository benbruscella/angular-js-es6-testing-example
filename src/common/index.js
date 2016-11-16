import angular from 'angular';

import UserInfoComponent from './user_info.component';

export default angular
    .module('main.app.common', [])
    .component('userInfoComponent', UserInfoComponent)
    .name;
