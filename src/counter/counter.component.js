export default class CounterComponent {

  constructor(initialCount = 20) {
    this.counter = initialCount;
  }

  increment() {
    this.counter++;
  }

}
