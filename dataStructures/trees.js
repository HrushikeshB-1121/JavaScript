/* Tree:
        resembles a hierarchical structure. 
        It consists of nodes connected by edges.
        Each node contains a value or data, and the edges represent the relationships between the nodes.
    Binary Tree: 
        A binary tree is a type of tree in which each node has at most two children, 
        referred as the left child and the right child.
*/


class TreeNode{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        const newNode = new TreeNode(data);
        if(this.root===null){
            this.root = newNode;
        } else {
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(currNode,newNode){
        if(newNode.data < currNode.data){
            if(currNode.left===null){
                currNode.left = newNode;
            } else {
                this.insertNode(currNode.left,newNode);
            }
        } else {
            if(currNode.right===null){
                currNode.right = newNode;
            } else {
                this.insertNode(currNode.right,newNode);
            }
        }
    }

    //root - left - right
    preOrder(node = this.root){
        if(node!==null){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    //left - root - right
    inOrder(node = this.root){
        if(node!==null){
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }

    //left - right - root
    postOrder(node = this.root){
        if(node !== null){
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }
}

let tree = new BinaryTree();
tree.insert(9)
tree.insert(3)
tree.insert(2)
tree.insert(6)
tree.insert(1)
tree.insert(8)
tree.insert(5)
tree.insert(4)
tree.insert(7)

console.log("Preorder traversal");
tree.preOrder();
console.log("Inorder traversal");
tree.inOrder();
console.log("Postorder traversal");
tree.postOrder();