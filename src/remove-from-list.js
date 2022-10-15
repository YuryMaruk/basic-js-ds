const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(list, num) {
  let curent = list;
  let prev  = null;
  while(curent){
    if(curent === list){
      if(curent.value === num){
        list = list.next;
        curent = list.next;
      } else {
        prev = curent;
        curent = curent.next;
      }
    } else {
        if(curent.value === num){
          prev.next = curent.next;
         /*  prev = curent; */
          curent = curent.next;
        } else {
          prev = curent;
          curent = curent.next;
        }
    }
  }

  return list;
}

module.exports = {
  removeKFromList
};

 