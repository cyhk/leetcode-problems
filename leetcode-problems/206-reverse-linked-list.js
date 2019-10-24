/**
 * Reverse a singly linked list.
 *
 * Example:
 *
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * Follow up:
 *
 * A linked list can be reversed either
 * iteratively or recursively. Could you
 * implement both?
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} head
 * @return {ListNode}
 */

 //recursive method
 var reverseList = function(head, reversed = null) {
  if (!head) return reversed;

  let newHead = head.next;

  head.next = reversed;
  reversed = head;

  head = newHead;
  return reverseList(head, reversed);
};

// iterative method
var reverseList = function(head) {
  let reversed = null;
  
  while (head) {
    let newHead = head.next;
    
    head.next = reversed;
    reversed = head;
    head = newHead;
  }
  
  return reversed;
};