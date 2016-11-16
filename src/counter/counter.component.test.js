import { assert } from 'chai';

import CounterComponent from './counter.component';

let component;

describe('CounterComponent', function() {

    beforeEach(function() {
        component = new CounterComponent();
    });

    it('should start with default counter value = 20', function () {
        assert.equal(component.counter, 20);
    });

    it('should accept initial counter value as dependency', function () {
        component = new CounterComponent(30);
        assert.equal(component.counter, 30);
    });

    it('should increment counter value after increment is called', function () {
        assert.equal(component.counter, 20);
        component.increment();
        assert.equal(component.counter, 21);
    });

});
