/**
 *
 * Given a non-empty binary tree, find the maximum path sum.
 * For this problem, a path is defined as any sequence of nodes from
 * some starting node to any node in the tree along the parent-child
 * connections. The path must contain at least one node and does not
 * need to go through the root.
 *
 * Example 1:
 *
 * Input: [1,2,3]
 *
 *        1
 *       / \
 *      2   3
 *
 *  Output: 6
 *  Example 2:
 *
 * Input: [-10,9,20,null,null,15,7]
 *
 *    -10
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 * Output: 42
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
var maxPathSum = function(root) {
  let sum = Number.MIN_SAFE_INTEGER;

  // helper function to check if current sum is the smallest
  // we are storing sum outside of this helper function
  // because we need to compare the sum to the sum at
  // various points of the tree
  function _maxPathSumHelper(root) {
    if (!root) return 0;

    const leftMax = _maxPathSumHelper(root.left);
    const rightMax = _maxPathSumHelper(root.right);

    // pick the max from 1) existing sum, 2) the left path,
    // 3) the right path, or 4) the entire tree at root
    sum = Math.max(
      sum,
      root.val,
      root.val + leftMax,
      root.val + rightMax,
      leftMax + root.val + rightMax
    );

    // return max path from either 1) root itself, root with max left path,
    // or root with max right path
    return Math.max(root.val, root.val + leftMax, root.val + rightMax);
  }

  _maxPathSumHelper(root);
  return sum;
};
