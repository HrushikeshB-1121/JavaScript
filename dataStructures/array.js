class Array{
    constructor(){
        this.length = 0;
        this.obj = {};
    }

    //add element to last
    push(value){
        this.obj[this.length] = value;
        this.length++;
    }

    //removes last element
    pop(){
        if(this.length===0){
            return "object is empty";
        }
        const lastnum = this.obj[this.length-1];
        delete this.obj[this.length-1];
        this.length--;
        return lastnum;
    }

    //displayes last element
    peek(){
        if(this.length===0){
            return "object is empty";
        }
        return this.obj[this.length-1];
    }

    //add first
    unshift(value){
        if(this.length===0){
            this.obj[this.length]=value;
            this.length++;
            return;
        }
        for(let i=this.length-1;i>=0;i--){
            this.obj[i+1] = this.obj[i];
        }
        this.obj[0] = value;
        this.length++;
    }

    //remove first
    shift(){
        if(this.length===0){
            return "object is empty";
        }
        const num = this.obj[0];
        for(let i=0;i<this.length-1;i++){
            this.obj[i] = this.obj[i+1];
        }
        delete this.obj[this.length-1];
        this.length--;
        return num;
    }

    //insert num at indx
    insert(idx,num){
        if(this.length===0){
            obj[0] = num;
            this.length++;
            return;
        }
        for(let x=this.length-1;x>=idx;x--){
            this.obj[x+1] = this.obj[x];
        }
        this.obj[idx] = num;
        this.length++;
    }

    //deleted the value at indx
    deletion(idx){
        if(this.length===0){
            return "object is empty";
        }
        let num = this.obj[idx+1];
        for(let x=idx;x<this.length-1;x++){
            this.obj[x] = this.obj[x+1];
        }
        delete this.obj[this.length-1]
        this.length--;
    }

    //update the indx value
    update(idx,num){
        if(this.length===0){
            return "object is empty";
        }
        this.obj[idx] = num;
    }
}

let arr1 = new Array();
arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);
arr1.push(50);
console.log(Object.values(arr1.obj),arr1.length);
arr1.pop();
console.log(Object.values(arr1.obj),arr1.length);
arr1.unshift(60);
console.log(Object.values(arr1.obj),arr1.length);
arr1.shift();
console.log(Object.values(arr1.obj),arr1.length);
let lastnum = arr1.peek();
console.log(lastnum);
arr1.insert(2,100);
console.log(Object.values(arr1.obj),arr1.length);
arr1.deletion(2)
console.log(Object.values(arr1.obj),arr1.length);
arr1.update(2,100);
console.log(Object.values(arr1.obj),arr1.length);
