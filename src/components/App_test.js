import React, { Component } from 'react';

// without while (true)
/* function* testing() {
  yield 1;
  //
  // - each iterator.next(): if it had code here, it would run up until the next 'yield' statement
  //
  yield 2;
  yield 3;
} */

function* testing() {
  // with while (true) and 4 times iterator.next() it will go over the and go back to the 1st one // {value: 1, done: false}
  while (true) {
    yield 1;
    //
    // - each iterator.next(): if it had code here, it would run up until the next 'yield' statement
    //
    yield 2;
    yield 3;
  }
}

class App_test extends Component {
  render() {
    // iterating through each 'yield' statement from the 'testing()' Generator Function
    // to do that, 1st I want to obtain the iterator which is returned by calling the Generator Function directly
    //
    const iterator = testing();
    // and on this 'iterator' object, we have a next() Function which is used to extract the Value 'yielded' by the Generator
    // along with the 'yielded' value, I will also reveive a DONE FLAG to inform me when the Generator has complete.
    // console.log() now will run all the code up until the next yield statement
    // so the first time it would show a 'yielded' value of 1
    console.log(iterator.next()); // {value: 1, done: false} // done: false - the Function Generator hasn't terminated
    console.log(iterator.next()); // {value: 2, done: false}
    console.log(iterator.next()); // {value: 3, done: false}
    console.log(iterator.next()); // {value: undefined, done: true}

    return <div>Test App</div>;
  }
}

export default App_test;
