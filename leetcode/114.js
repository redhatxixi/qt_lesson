var flatten = function(root) {
	if (!root) return null
	if (root.left) {
		let rightTree = root.right
		let pre = root.left
		while(pre.right !== null) pre = pre.right
		pre.right = rightTree
		root.right = root.left
		root.left = null
	}
	flatten(root.right)
};