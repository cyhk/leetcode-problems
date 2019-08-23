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

    let pathLeft = 0;
    let pathRight = 0;
    let pathBoth = 0;

    if (root.left && root.val === root.left.val) {
      pathLeft = 1 + _longestUnivalueHelper(root.left);
    }

    if (root.right && root.val === root.right.val) {
      pathRight = 1 + _longestUnivalueHelper(root.right);
    }

    if (root.right && root.left &&
      root.val === root.right.val && root.left.val === root.right.val) {
      pathBoth = 2 + _longestUnivalueHelper(root.left) + 
      _longestUnivalueHelper(root.right);
    }

    sum = Math.max(sum, pathBoth);
    return Math.max(pathLeft, pathRight);
  }

  return Math.max(sum, _longestUnivalueHelper(root));
};
