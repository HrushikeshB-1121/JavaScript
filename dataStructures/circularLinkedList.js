/* Circular LinkedList:
        similar to linkedlist but the tail is connected to head;
        last node is connected to first node;
    ex: 
        move cursor;
        loop of musicplaylist
        curson in a line
*/

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }

    add(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            newNode.next = this.head;
            this.length++;
            return;
        }
        let curr = this.head;
        while(!(curr.next === this.head)){
            curr = curr.next;
        }
        curr.next = newNode;
        newNode.next = this.head;
        this.length++;
    }

    print(){
        let curr = this.head;
        let list = "";
        while(!(curr.next === this.head)){
            list += curr.data + " -> ";
            curr = curr.next; 
        }
        console.log(list + curr.data +" -> "+ this.head.data);
    }

    insertAt(indx,data){
        if(indx===0){
            this.addFirst(data);
            return;
                // newNode.next = this.head;
                // let curr = this.head;
                // while(!(curr.next === this.head )){
                //         curr = curr.next;
                //     }
                //     curr.next = newNode;
        }
        let newNode = new Node(data);
        let curr = this.head;
        for(let x=0;x<indx-1;x++){
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
        this.length++;
    }

    addFirst(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        let curr = this.head;
        while(!(curr.next === this.head )){
            curr = curr.next;
        }
        curr.next = newNode;
        this.head = newNode;
        this.length++;
    }
}

let cirLList = new CircularLinkedList();
cirLList.add(10);
cirLList.add(20);
cirLList.add(30);
cirLList.add(40);
cirLList.add(50);
cirLList.print();
cirLList.insertAt(2,600);
cirLList.print();

cirLList.insertAt(0,800);
cirLList.print();

cirLList.insertAt(1,900);
cirLList.print();

cirLList.insertAt(10,1000);
cirLList.print();

cirLList.addFirst(99);
cirLList.print();

