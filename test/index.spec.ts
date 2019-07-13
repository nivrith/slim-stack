import {
  SlimStack
} from './../src/index';
import {
  expect
} from 'chai';

describe('SlimStack', () => {
  let stack: SlimStack<number>;
  let initialArray: Array<number>;

  beforeEach(() => {
    initialArray= [1,2,3,4,5];
    stack = new SlimStack(initialArray);
  })

  describe('Stack Creation', ()=> {
    it('creates an empty stack', () => {
      let $stack = new SlimStack();
      expect($stack.size()).to.equal(0);
    });

    it('creates a stack from array', () => {
      expect(stack.size()).to.equal(initialArray.length);
    });
  });

  describe('Push', ()=> {
    it('it pushes `6` to the top of stack', () => {
      // console.log(initialArray);
      stack.push(6);
      // console.log(initialArray);
      expect(initialArray[initialArray.length-1]).to.equal(6);
    });
  });

  describe('Pop', ()=> {

    it('it pops item from stack', () => {
      stack.pop();
      expect(initialArray.length).to.equal(4);
    });

    it('it returns the popped element on popping off', () => {
      let item = stack.pop();
      expect(item).to.equal(5);
    });
  });

  describe('Peek', ()=> {
    it('it returns the top most element of the stack', () => {
      let item = stack.peek();
      expect(item).to.equal(initialArray[initialArray.length - 1]);
    });

    it('it does not remove the topmost element from stack', () => {
      let item = stack.peek();
      expect(initialArray[initialArray.length - 1]).to.equal(item);
    });

  });

  describe('Size', ()=> {
    it('expects size of stack to be `5`', () => {
      expect(stack.size()).to.equal(initialArray.length);
    });
  });

});
