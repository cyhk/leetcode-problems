/**
 * 
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals
 * the given sum.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given the below binary tree and sum = 22,
 * 
 *       5
 *      / \
 *     4   8
 *    /   / \
 *   11  13  4
 *  /  \    / \
 * 7    2  5   1
 * Return:
 * 
 * [
 *    [5,4,11,2],
 *    [5,8,4,5]
 * ]
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum, paths=[], path='') {
  if (!root) return [];
  
  // make path string
  if (path !== '') path += '_';
  path += root.val;
  
  // if we are at a leaf and a valid path is found, turn the path string into
  // an array, or else keep going
  if (!root.left && !root.right && root.val === sum) paths.push(path.split('_'));
  else {
    pathSum(root.left, sum - root.val, paths, path)
    pathSum(root.right, sum - root.val, paths, path);
  }
  
  return paths;
};