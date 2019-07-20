/*!
 * slim-stack <https://github.com/nivrith/slim-stack>
 *
 * Copyright (c) Nivrith
 * Licensed under the MIT License.
 */



/**
 *
 *
 * @export
 * @class SlimStack
 * @template T
 */
export class SlimStack <T> {
  /**
   *
   *
   * @private
   * @type {Array<T>}
   * @memberof SlimStack
   */
  private stack: Array<T>;
  /**
   *
   *
   * @private
   * @type {number}
   * @memberof SlimStack
   */
  private length: number = 0;

  /**
   *Creates an instance of SlimStack.
   * @param {Array<T>} [array=[]]
   * @memberof SlimStack
   */
  constructor(array: Array<T> = []) {
    this.stack = array;
    this.length = array.length;
  }

  /**
   *
   *
   * @memberof SlimStack
   */
  public push(item: T) {
    this.stack.push(item);
    return ++this.length;
  }

  /**
   *
   *
   * @memberof SlimStack
   */
  public pop() {
    let item = this.stack.pop();
    this.length--;
    return item;
  }
  /**
   *
   *
   * @memberof SlimStack
   */
  public size() {
    return this.length;
  }

  /**
   *
   *
   * @memberof SlimStack
   */
  public peek() {
    return this.stack[this.length - 1];
  }

  /**
   *
   *
   * @memberof SlimStack
   */
  public *[Symbol.iterator]() {
    yield* [...this.stack].reverse();
  }

}