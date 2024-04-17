/* Stack:
        last in first out;
    ex: 
        undo redo opertations;
        books kept one after one;
*/


class Stackk{
    constructor(){
        this.length = 0;
        this.obj = {};
    }

    //add elements to first
    pushh(value){
        for(let x=this.length-1;x>=0;x--){
            this.obj[x+1] = this.obj[x];
        }
        this.obj[0] = value;
        this.length++;
    }

    //removes last added element
    popp(){
        if(this.length===0){
            return "objay is empty";
        }
        let lastNum = this.obj[0];
        for(let x=0;x<this.length-1;x++){
            this.obj[x] = this.obj[x+1];
        }
        delete this.obj[--this.length];
        return lastNum;
    }

    //displays lastadded element
    peekk(){
        if(this.length===0){
            return "objay is empty";
        }
        return this.obj[0];
    }

}

let stack = new Stackk();
stack.pushh(10);
stack.pushh(20);
stack.pushh(30);
stack.pushh(40);
stack.pushh(50);
console.log(Object.values(stack.obj),stack.length);
stack.popp();
console.log(Object.values(stack.obj),stack.length);
let x = stack.peekk()
console.log(x);