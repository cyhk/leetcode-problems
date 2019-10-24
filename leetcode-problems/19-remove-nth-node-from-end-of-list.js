/**
 * Given a linked list, remove the n-th node from the 
 * end of list and return its head.
 * 
 * Example:
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, 
 * the linked list becomes 1->2->3->5.
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let fast = head;
  let slow = null;

  for (let i=0; i<n-1; i++) {
    fast = fast.next;
  }

  while (fast && fast.next) {
    fast = fast.next;
    
    if (slow === null) slow = head;
    else slow = slow.next;
  }
  
  if (slow === null) {
    const newHead = head.next;
    head.next = null;
    head = newHead;
  } else {
    const nodeToRemove = slow.next;
    slow.next = nodeToRemove.next;
    nodeToRemove.next = null;
  }
  
  return head;
};