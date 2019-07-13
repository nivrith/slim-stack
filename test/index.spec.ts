import {
  slimStack
} from './../src/index';
import {
  expect
} from 'chai';

describe('slimStack', () => {

  it('Returns `hello universe`', () => {
    expect(slimStack()).to.equal('hello universe');
  });

});
