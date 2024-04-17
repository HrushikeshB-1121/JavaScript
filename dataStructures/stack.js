class Stackk{
    constructor(){
        this.length = 0;
        this.arr = {};
    }

    pushh(value){
        for(let x=this.length-1;x>=0;x--){
            this.arr[x+1] = this.arr[x];
        }
        this.arr[0] = value;
        this.length++;
    }

    popp(){
        if(this.length===0){
            return "array is empty";
        }
        let lastNum = this.arr[0];
        for(let x=0;x<this.length-1;x++){
            this.arr[x] = this.arr[x+1];
        }
        delete this.arr[--this.length];
        return lastNum;
    }

    peekk(){
        if(this.length===0){
            return "array is empty";
        }
        return this.arr[0];
    }

}

let arr1 = new Stackk();
arr1.pushh(10);
arr1.pushh(20);
arr1.pushh(30);
arr1.pushh(40);
arr1.pushh(50);
console.log(Object.values(arr1.arr),arr1.length);
arr1.popp();
console.log(Object.values(arr1.arr),arr1.length);
let x = arr1.peekk()
console.log(x);