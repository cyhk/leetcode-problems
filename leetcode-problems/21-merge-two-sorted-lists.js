/**
 * Merge two sorted linked lists and return it as a new list.
 * The new list should be made by splicing together the node
 * of the first two lists.
 * 
 * Example:
 * 
 * Input: 1->2->4, 1->3->4
 * Output: 1->1->2->3->4->4
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let mergedList = null;
  let mergedListHead = null;
  while (l1 || l2) {
      if (!l2) {
          if (!mergedList) {
              mergedList = l1;
              mergedListHead = mergedList;
          } else {
              mergedList.next = l1;
              mergedList = mergedList.next;
          }
          l1 = l1.next;
      }
      else if (!l1) {
          if (!mergedList) {
              mergedList = l2;
              mergedListHead = mergedList;
          } else {
              mergedList.next = l2;
              mergedList = mergedList.next;
          }
          l2 = l2.next;
      }
      else if (l1.val <= l2.val) {
          if (!mergedList) {
              mergedList = l1;
              mergedListHead = mergedList;
          } else {
              mergedList.next = l1;
              mergedList = mergedList.next;
          }
          l1 = l1.next;
      } else {
          if (!mergedList) {
              mergedList = l2;
              mergedListHead = mergedList;
          } else {
              mergedList.next = l2;
              mergedList = mergedList.next;
          }
          l2 = l2.next;
      }
  }
  return mergedListHead;
};