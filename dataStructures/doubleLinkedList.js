/* Double LinkedList :
        each node contains references to both the next node and the previous node
    ex:
        website pages
        undo redo options
        Bidirectional Navigation
        Updating History:
*/


class Node{
    constructor(data){
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    // adds at last
    add(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.length++;
            return;
        }
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = newNode;
        newNode.prev = curr;
        this.length++;
    }

    // prints in forward direction
    print(){
        let curr = this.head;
        let list = "";
        while(curr.next){
            list += curr.data + " <-> ";
            curr = curr.next;
        }
        console.log(list+curr.data+" -> null");
    }

    // adds element infront of the list
    addFirst(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.length++;
            return;
        }
        newNode.next = this.head;
        this.head.prev=newNode;
        this.head = newNode;
        this.length++;
    }

    // inserts in btw the list
    insert(indx,data){
        let newNode = new Node(data);
        let curr = this.head;
        for(let x=0;x<indx-1;x++){
            curr = curr.next;
        }
        newNode.next = curr.next;
        newNode.prev = curr;
        curr.next.prev = newNode;
        curr.next = newNode;
        this.length++;
    }

    // deletes last element
    delete(){
        let curr = this.head;
        while(curr.next.next){
            curr = curr.next;
        }
        curr.next = null;
        this.length--;
    }

    // deletes first element
    deleteFirst(){
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    // prints in reverse order
    printReverse(){
        let curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        let list = "null -> ";
        while(curr.prev){
            list += curr.data+" <-> ";
            curr = curr.prev;
        }
        console.log(list+curr.data);
    }
}

let dLList = new DoubleLinkedList();
dLList.add(10);
dLList.add(20);
dLList.add(30);
dLList.add(40);
dLList.add(50);
dLList.print()
dLList.delete();
dLList.print();
dLList.deleteFirst();
dLList.print();
dLList.addFirst(10);
dLList.print();
dLList.insert(2,100);
dLList.print();
dLList.printReverse()