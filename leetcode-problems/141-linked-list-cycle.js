/**
 * Given a linked list, determine if it has a cycle in it.
 * 
 * To represent a cycle in the given linked list, we use an 
 * integer pos which represents the position (0-indexed) in
 * the linked list where tail connects to. If pos is -1, then 
 * here is no cycle in the linked list.
 * 
 * Explanation: There is no cycle in the linked list.
 * 
 * Follow up:
 * Can you solve it using O(1) (i.e. constant) memory?
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let fastPointer = head;
  let slowPointer = head;
  
  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    
    if (fastPointer === slowPointer) return true;
  }
  
  return false;
};