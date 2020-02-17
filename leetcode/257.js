var binaryTreePaths = function(root) {
	let res = []
	function walk(node, path) {
		if (!node) return
		let val = node.val
		path.push(val)
		if (!node.left && !node.right) {
			res.push(path.join('->'))
			return
		}
		walk(node.left, path.slice(0))
		walk(node.right, path.slice(0))
	}
	walk(root, [])
	return res
};