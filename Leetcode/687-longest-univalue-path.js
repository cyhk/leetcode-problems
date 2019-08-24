/**
 * Given a binary tree, find the length of the longest path where each node in the path has
 * the same value. This path may or may not pass through the root.
 * 
 * The length of path between two nodes is represented by the number of edges between them.
 * 
 * 
 * 
 * Example 1:
 * 
 * Input:
 * 
 *              5
 *              / \
 *             4   5
 *            / \   \
 *           1   1   5
 * Output: 2
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * 
 *               1
 *              / \
 *             4   5
 *            / \   \
 *           4   4   5
 * Output: 2
 * 
 * 
 * 
 * Note: The given binary tree has not more than 10000 nodes. The height of the tree is no
 * more than 1000.
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let sum = 0;

  function _longestUnivalueHelper(root) {
    if (!root) return 0;
    
    let havePathLeft = 0;
    let havePathRight = 0;
    let pathLeft = _longestUnivalueHelper(root.left);
    let pathRight = _longestUnivalueHelper(root.right);

    if (root.left && root.val === root.left.val) {
      havePathLeft = pathLeft + 1;
    }

    if (root.right && root.val === root.right.val) {
      havePathRight = pathRight + 1;
    }

    sum = Math.max(sum, havePathRight + havePathLeft);
    return Math.max(havePathLeft, havePathRight);
  }
  
  _longestUnivalueHelper(root)
  return sum;
};