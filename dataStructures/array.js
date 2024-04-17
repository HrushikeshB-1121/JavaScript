class Array{
    constructor(){
        this.length = 0;
        this.arr = {};
    }

    push(value){
        this.arr[this.length] = value;
        this.length++;
    }

    pop(){
        if(this.length===0){
            return "Empty Array";
        }
        const lastnum = this.arr[this.length-1];
        delete this.arr[this.length-1];
        this.length--;
        return lastnum;
    }

    peek(){
        if(this.length===0){
            return "Empty Array";
        }
        return this.arr[this.length-1];
    }

    unshift(value){
        if(this.length===0){
            this.arr[this.length]=value;
            this.length++;
            return;
        }
        for(let i=this.length-1;i>=0;i--){
            this.arr[i+1] = this.arr[i];
        }
        this.arr[0] = value;
        this.length++;
    }

    shift(){
        if(this.length===0){
            return "array isempty";
        }
        const num = this.arr[0];
        for(let i=0;i<this.length-1;i++){
            this.arr[i] = this.arr[i+1];
        }
        delete this.arr[this.length-1];
        this.length--;
        return num;
    }

    insert(idx,num){
        if(this.length===0){
            arr[0] = num;
            this.length++;
            return;
        }
        for(let x=this.length-1;x>=idx;x--){
            this.arr[x+1] = this.arr[x];
        }
        this.arr[idx] = num;
        this.length++;
    }

    deletion(idx){
        if(this.length===0){
            return "arr is empty";
        }
        let num = this.arr[idx+1];
        for(let x=idx;x<this.length-1;x++){
            this.arr[x] = this.arr[x+1];
        }
        delete this.arr[this.length-1]
        this.length--;
    }

    update(idx,num){
        if(this.length===0){
            return "arr is empty";
        }
        this.arr[idx] = num;
    }
}

let arr1 = new Array();
arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
arr1.push(50);
console.log(Object.values(arr1.arr),arr1.length);
arr1.pop();
console.log(Object.values(arr1.arr),arr1.length);
arr1.unshift(60);
console.log(Object.values(arr1.arr),arr1.length);
arr1.shift();
console.log(Object.values(arr1.arr),arr1.length);
let lastnum = arr1.peek();
console.log(lastnum);
arr1.insert(2,100);
console.log(Object.values(arr1.arr),arr1.length);
arr1.deletion(2)
console.log(Object.values(arr1.arr),arr1.length);
arr1.update(2,100);
console.log(Object.values(arr1.arr),arr1.length);
