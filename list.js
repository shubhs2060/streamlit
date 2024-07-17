class Link{
    constructor(){
        this.head = null;
        this.tail= null;
        this.length = 0;
    }
   

    push(val){
        let node = new Node(val)
        if(this.head == null){
            this.head = node
            this.tail = node
            this.length++
            return this
        }else{
            this.tail.next = node
            this.tail = node
            this.length++
            return this 
        }
    }
}

class Node{
    constructor(val){
        this.next = null
        this.val =val;
    }
 
}