/**
 * Merge k sorted linked lists and return it as one sorted list. Analyze and describe its
 * complexity.
 * 
 * Example:
 * 
 * Input:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function (lists) {
  let sortedListHead = null;
  let sortedListTail = null;

  // at each index, find the node with the lowest value, and append to sortedList
  while (lists.some(list => list)) {
    let listIndex = 0;
    let min = null;

    for (let i = 0; i < lists.length; i++) {
      if (!lists[i]) continue;
      if (min === null || lists[i].val < min) {
        min = lists[i].val;
        listIndex = i;
      }
    }

    if (!sortedListHead) {
      sortedListHead = lists[listIndex];
      sortedListTail = sortedListHead;
      lists[listIndex] = lists[listIndex].next;
      sortedListTail.next = null;
    } else {
      sortedListTail.next = lists[listIndex];
      lists[listIndex] = lists[listIndex].next;
      sortedListTail = sortedListTail.next;
      sortedListTail.next = null;
    }
  }

  return sortedListHead;
};

// TODO: add heap solution 