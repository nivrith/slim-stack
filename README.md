# slim-stack

[![CircleCI](https://circleci.com/gh/nivrith/slim-stack/tree/master.svg?style=svg)](https://circleci.com/gh/slim-stack/slim-stack/tree/master)
[![NPM Downloads](https://img.shields.io/npm/dw/slim-stack.svg)](https://www.npmjs.com/package/slim-stack)
[![node](https://img.shields.io/node/v/slim-stack.svg)](https://www.npmjs.com/package/slim-stack)
[![License MIT](https://img.shields.io/github/license/nivrith/slim-stack.svg)](https://github.com/nivrith/slim-stack/blob/master/LICENSE)

stack implementation for JavaScript

## Highlights

- Written in Typescript

- Iterable using for...of statement

- follows LIFO model (Last in first out)

- Iterate top to bottom

## Usage

> stack implementation for JavaScript

```js

  import SlimStack from 'slim-stack';

  // Empty stack
  let stack = new SlimStack(); //creates empty stack

  stack.push(6); // Pushes 6 to top of the stack
  stack.pop(); // Removes the top most element of the stack and returns it
  stack.peek(); // Returns the top most element of the stack without removing it
  stack.size(); // Returns the size of the stack

  // Or create a stack from an array
  // last element of array will be top most element of the stack

  stack = new SlimStack([1,2,3,4,5]);

  stack.push(6);
  stack.pop(); // returns 6
  stack.peek(); // returns 5
  stack.size(); // returns 5

  ### Iteration

  Slim Stack follows the iterator and iterable protocols making it an iterable type. Which means you can use
  the for...of statement to iterate over elements of  the stack from top to bottom.

  for (let item of stack) {
    console.log(item);
  }

  //5
  //4
  //3
  //2
  //1

```

## License

MIT © [Nivrith](https://github.com/nivrith)
