/* LinkedList:
        it consists of sequence of elements, called nodes
        node has both data and reference to next node
    ex:
        music playlist
        browser history
        file system
        undo function
        train or bus scheule
*/

// node
class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // links new node to curr node
    add(data){
        const newNode = new Node(data);
        if(this.head===null){
            this.head = newNode;
            this.size++;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;
        this.size++;
    }

    //prints total node
    print(){
        if(this.head == null){
            return "list is empty";
        }
        let curr = this.head;
        let list ="";
        while(curr.next){
            list += curr.data + " -> ";
            curr = curr.next;
        }
        console.log(list+"null");
    }

    //inserts at the index
    insertAt(indx,data){
        if(indx<0||indx>this.size){
            return "invalid operation";
        }
        let curr = this.head;
        for(let x=0;x<indx-1;x++){
            curr = curr.next;
        }
        let newNode = new Node(data);
        newNode.next = curr.next;
        curr.next = newNode;
        this.size++;
    }

    //remove the element present in curr indx
    removeFrom(indx){
        let curr = this.head;
        for(let x=0;x<indx-1;x++){
            curr = curr.next;
        }
        curr.next = curr.next.next;
        this.size--;
    }

    //displayes the index of data
    indexOf(num){
        let curr = this.head;
        for(let x=0;x<this.size-1;x++){
            if(curr.data===num){
                return x;
            }
            curr = curr.next;
        }
        return -1;
    }

    //return true ifEmpty or false
    isEmpty(){
        return this.size===0;
    }
}

let ll = new LinkedList();

ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.print();

ll.insertAt(2,100);
ll.print()

ll.removeFrom(2);
ll.print();

console.log(ll.indexOf(30));

console.log(ll.isEmpty());
