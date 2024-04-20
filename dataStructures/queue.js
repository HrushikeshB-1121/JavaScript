/* Queue:
        first in first out;
    ex:
        railway station ticket counter
        moving in a line 
*/

class Queue{
    constructor(){
        this.length = 0;
        this.obj = {};
    }

    //adds elements at last 
    enqueue(value){
        this.obj[this.length++]=value;
    }

    //remove elements at first
    dequeue(){
        if(this.length===0){
            return " empty object ";
        }
        let firstNum = this.obj[0];
        for(let i=0;i<this.length-1;i++){
            this.obj[i] = this.obj[i+1]; 
        }
        delete this.obj[--this.length];
        return firstNum;
    }

    //display first element
    peek(){
        if(this.length===0){
            return " empty object ";
        }
        return this.obj[0];
    }
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(Object.values(queue.obj),queue.length);
queue.dequeue();
console.log(Object.values(queue.obj),queue.length);
let firstNum = queue.peek();
console.log(firstNum);