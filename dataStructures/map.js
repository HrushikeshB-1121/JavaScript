/* Map:
        it stores the data as key-value pair;
        each key is unique and mapped towards its value
    ex:
        address book
        language transtlator
        dictionarie
        train number
*/

class Map{
    constructor(){
        this.entries = {};
    }

    // unique key is added and value is mapped
    set(key,value){
        this.entries[key] = value;
    }

    // returns value of the key
    get(key){
        return this.entries[key];
    }

    // returns true if the key is present
    has(key){
        return this.entries.hasOwnProperty(key);
        // return key in this.entries;
    }

    // delete is key exists
    delete(key){
        if(this.has(key)){
            delete this.entries[key];
        }
    }

    // prints all key
    keys(){
        console.log(Object.keys(this.entries));
    }

    // prints all values
    values(){
        console.log(Object.values(this.entries));
    }

    //return an array containing all key-value pairs
    allEntries(){
        // console.log(Object.entries(this.values));
        return Object.entries(this.entries);
    }

    // returns size of keys
    size(){
        return Object.keys(this.entries).length;
    }

    // clears all the values
    clear(){
        this.entries = {};
    }
}

let map = new Map();
map.set("key1","value1");
map.set("key2","value2");
map.set("key3","value3");
map.set("key4","value4");
map.set("key5","value5");

map.keys();
map.values();

console.log(map.get("key3"));
console.log(map.has("key3"));

map.delete("key3");
console.log(map.has("key3"));

console.log(map.size());
console.log(map.allEntries());

map.clear();
console.log(map.allEntries());