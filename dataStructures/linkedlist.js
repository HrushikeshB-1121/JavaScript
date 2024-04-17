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
}

let ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
console.log(ll);