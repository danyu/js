/**
 * Another basic algorithm even for Front End developers.

You are asked to reverse a linked list.

Suppose we have Node interface like this

class Node {
   new(val: number, next: Node);
   val: number
   next: Node
}
We can then chain nodes together to create a linked list.

const Three = new Node(3, null)
const Two = new Node(2, Three)
const One = new Node(1, Two)

//now we have  a linked list
// 1 → 2 → 3
Now how can you reverse it to 3 → 2 → 1 ? you can modify the next property of each node, but not the val.

Follow up

Could you solve it with and without recursion?
 */

/**
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

 class Node {
    new(val , next);
      val
     next
  }
  

/**
 * @param {Node} list
 * @return {Node}
 */
const reverseLinkedList = (list) => {
  // your code
  let head =null;
  let cur = list;
  
  while(cur){
    let next = cur.next;  
    cur.next = head;
    head = cur;
    cur= next;  
  }

  return head;
};
