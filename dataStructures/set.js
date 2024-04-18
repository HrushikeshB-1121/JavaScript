/* Set:
        stores a collection of distinct elements, where each element occurs only once within the set. 
   ex:
        Social Media Followers: 
*/

class Set{
    constructor(){
        this.items = {};
    }

    //addes only it element is not present
    add(element){
        if(!this.has(element)){
            this.items[element] = element;
        }
    }

    //delets if element is present
    delete(element){
        if(this.has(element)){
            delete this.items[element];
        }
    }

    //returns true if element is present 
    has(element){
        return this.items.hasOwnProperty(element);
    }

    //length of elements
    size(){
        return Object.keys(this.items).length;
    }

    //returns the values
    values(){
        return Object.values(this.items);
    }

    //prints all the elements
    print(){
        console.log(Object.values(this.items));
    }
}

let set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(50);
set.add(15);
set.print();
set.add(100);
set.print();
set.delete(30);
set.print();
console.log(set.has(40));
console.log(set.size());
console.log(set.values());