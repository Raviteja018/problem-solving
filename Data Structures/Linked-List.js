class Node{
    constructor(val=null, next=null){
        this.val = val;
        this.next = next;
    }

    setNext(val=null, next=null){
        do{
            this.next = new Node(val);
        }while((this.next === null))
    }
}

const node1 = new Node(1);

node1.setNext(2);

node1.setNext(3);

console.log(node1);











