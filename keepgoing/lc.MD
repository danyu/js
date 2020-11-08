
## 3. longest substring without repeating characters

Given a string, find the length of the longest substring without repeating characters.

```
Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, 
             "pwke" is a subsequence and not a substring.
```
 track last no dup start
```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // s='bbb';
    let track={}, maxLen=0, start=0;
    s.split('').forEach((c,i)=>{
        if(track[c]!==undefined && track[c]>=start){
            maxLen = maxLen>(i-start)?maxLen:(i-start);
            start=track[c]+1;
        }
        track[c]=i;
    });
    let restL = s.length-start;
    maxLen = restL>maxLen?restL:maxLen;
    console.log(track, start);
    return maxLen;
};
```

## 5. Longest Palindromic Substring
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
```
Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
```
 Center spread 0(n^2). 
```javascript
var longestPalindrome = function(s) {
    // s='222020221';
    // s='';
    // s='cbbd';
    let chs = s.split(''), start=0,end=0;
    // center around
    var centerSpread = function(chs, l, r){
       while(l>-1 && r<chs.length && chs[l]==chs[r]){ l--;r++;} 
       if(r-l-1>end-start+1){ start=l+1;end=r-1; }
    };
    s.split('').forEach((ch,i)=>{
       centerSpread(chs, i, i);
       centerSpread(chs, i, i+1);
    });
    return s.substring(start,end+1);
};
```


## 23. Merge k Sorted Lists
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
```
Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
```
```javascriptt
var mergeKLists = function(lists) {
    // let l = new ListNode(1); l.next=new ListNode(9);
    // lists.push(null);
    // console.log(lists);
    var split = function(lsts){
        let m = lsts.length/2;
        return lsts.reduce((acc, cur ,i)=>{
            if (!cur) return acc;
            if (i<m ) {acc[0].push(cur)};
            if (i>=m ) {acc[1].push(cur)};
            return acc;
        },[[],[]]);
    }
    var merge2Lists = function(l1,l2){
        let head= new ListNode(), cur = head;
        while(l1 && l2){
            if(l1.val<=l2.val){
                cur.next = l1;
                l1=l1.next;
            }else{
                cur.next = l2;
                l2=l2.next;
            }
            cur=cur.next;
        }
        if(l1){ cur.next = l1;}
        if(l2){ cur.next = l2;}
        return [head.next];
    }
    
    var mergeHelper = function(lsts){
        // if(lsts.length<1){ return null; }
        if(lsts.length<=1){ return lsts; }
        if(lsts.length==2){ return merge2Lists(lsts[0],lsts[1]); }
        let [l,r]=split(lsts);
        return merge2Lists(mergeHelper(l)[0],mergeHelper(r)[0]);
    }
    if (!lists || lists.length==0) return null;
    else return mergeHelper(lists)[0];
};
```

## 55. Jump Game

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // nums = [2,0];
    var track = {};
    let i=0, last = nums.length-1;
    var jump = (i)=>{
        if(track[i] || i>last) {return false;}
        if(i== last) {return true;}
        track[i]=true;
        let step = nums[i];
        if(i+step>=last) {return true;}
        while(step >0 ){
            if(jump(i+step)) {return true;}
            step--;
        }
        return false;
    }
    return jump(0);
};
```

## 56. Merge Intervals
Given a collection of intervals, merge all overlapping intervals.

```
Example 1:
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

 **sort first, always merge to the last in merged list**

```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // intervals=[[1,3],[3,4]];
    if(intervals.length==0){
        return intervals;
    }
    intervals.sort((a, b)=> a[0]-b[0]);
    let mrgd = [intervals[0]];
    intervals.shift();
    intervals.forEach(cur=>{
        let lst = mrgd[mrgd.length-1];
        if(lst[1] < cur[0]){mrgd.push(cur);}
        else {lst[1] = Math.max(lst[1],cur[1]);}
    });
    // console.log(mgd);
    return mrgd;
};
```

## 94. Binary Tree Inorder Traversal
Given a binary tree, return the inorder traversal of its nodes' values.

#### recursion 

#### iterative
```javascript
var inorderTraversal = function(root) {
    var q =[], inOrd=[], cur=root;
    while(cur !==null || q.length>0){
      //DFS to get all left children 
        while(cur!==null){
            q.push(cur);
            cur=cur.left;
        }
        cur = q.pop();
        inOrd.push(cur.val);
        cur=cur.right;
    }
    return inOrd;
};
```

## 98. Validate Binary Search Tree

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:
```
- The left subtree of a node contains only nodes with keys less than the node's key.
- The right subtree of a node contains only nodes with keys greater than the node's key.
- Both the left and right subtrees must also be binary search trees.
```
 : track **prev** inorder.

```javascript
// Recursive
var isValidBST = function(root) {
    // var prev = null;
    var check = function(node,prev){
        if(!node) return true;
        if (!check(node.left,prev)) 
            return false;
        if(prev.val!==null && node.val <= prev.val) {return false;}
        prev.val= node.val;       
        return check(node.right, prev);
    };
    return check(root,{val:null});
};
```



## 100. Same Tree 
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
```javascript
var isSameTree = function(p, q) {
    // preorder traversal
    if (q==null && p==null) return true;
    return ( p!=null && q!=null && p.val==q.val) 
        && isSameTree(p.left, q.left) 
        && isSameTree(p.right, q.right);
};
```

## 104. Maximum Depth of Binary Tree
 Another words, the height
```javascript
var maxDep = function(root){
    if(!root) return 0;
    return Math.max(maxDep(root.left),maxDep(root.right))+1;
}
```

## 111. Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

*Note: A leaf is a node with no children.*

**: be careful about tree with single path**

```javascript
var minDepth = function(root) {
    if(!root) return 0;
    if(root.left && !root.right) return 1+minDepth(root.left);
    else if(!root.left && root.right) return 1+minDepth(root.right);
    else return 1+Math.min(minDepth(root.left), minDepth(root.right));
};
```

## 206: Reverse linked list
```javascript
// recursive
var reverseList = function (head) {
  let newHead = null;
  var reverse = function (cur) {
    if (!cur) return null;
    let revTail = reverse(cur.next);
    if (!revTail) newHead = cur;
    else {
      cur.next = null; // avoid Circular
      revTail.next = cur;
    }
    return cur;
  }
  let tail = reverse(head);
  // console.log(newHead);
  // tail.next = null;
  return newHead;
};

// iterative
var reverseList = function (head) {
  let cur = head, prev=null;
  while (cur) {
    let nxt = cur.next;
    cur.next = prev;// cut link
    prev = cur;
    cur=nxt;
  }
  return prev;

}
```
## 997. Find the Town Judge
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:
```
The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.
```

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

```javascript
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    // trust=[[1,3],[1,4],[2,3],[2,4],[4,3]]; N=4;
    if(trust.length==0 && N==1) return 1;
    var jud={};
    trust.forEach(([a,b])=>{
        if(jud[a]==undefined) jud[a]=0;
        if(jud[b]==undefined) jud[b]=0;
        jud[a]--;
        jud[b]++;
    });
    // console.log(jud);
    let judge = Object.keys(jud).find( k => jud[k]===N-1);
    return judge?judge:-1;
};
```

## 1232. Check If It Is a Straight Line
```javascript
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(cor) {
    const [x0,y0] = cor.shift(), INFI='infinity';
    var k = null; 
    return !cor.find(([xi,yi])=>{
        // console.log(xi,yi);
        let slope= (y0==yi)?INFI:(x0-xi)/(y0-yi) ;
        if(k==null){
            k= slope;return false;
        }
        return k!==slope;
    });
};
```

## 1333. Filter Restaurants by Vegan-Friendly, Price and Distance

Given the array restaurants where  restaurants[i] = [idi, ratingi, veganFriendlyi, pricei, distancei]. You have to filter the restaurants using three filters.

The veganFriendly filter will be either true (meaning you should only include restaurants with veganFriendlyi set to true) or false (meaning you can include any restaurant). In addition, you have the filters maxPrice and maxDistance which are the maximum value for price and distance of restaurants you should consider respectively.

Return the array of restaurant IDs after filtering, ordered by rating from highest to lowest. For restaurants with the same rating, order them by id from highest to lowest. For simplicity veganFriendlyi and veganFriendly take value 1 when it is true, and 0 when it is false.
```javascript

/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    // sort by id (number)
    // veganFriendly = 0;
    /* restaurants = [[1,4,1,40,10],
    [3,8,1,30,4],[2,8,0,50,5],[4,10,0,10,3],[5,1,1,15,1]];  maxPrice = 50; maxDistance = 10;*/s
    let sorted={}; 
    restaurants.forEach(([id,r,v,p,d],i)=>{
        if(v>=veganFriendly && p<=maxPrice && d<=maxDistance){
            // console.log(v);
            if(sorted[r]) sorted[r].push(id);
            else sorted[r] = [id];
        }
    })
    // console.log(sorted);
    return Object.values(sorted).reduce((acc,cur)=>{
        cur.sort((a,b)=>b-a);
        return cur.concat(acc);// backward
    },[]);
};
```




##

# Dynamic programming
__no conflicts:__ each move is independent.

__with conflicts:__ each move has directly impact to applicable of next move.

## p_i

build tree from pairs

```javascript
// List of pare [parent, child], build a family tree
var =[[1,2],[6,5],[2,3]];

function TreeNode(){

}

function buildTree(lst){
    let tr={};
    lst.forEach(([p,c])=>{

    });

}

buildTree();

```
Match (a, a?)
* ? means the letter before it can be used or skipped.

```javascript

var match = function(s, p){
        let sL= s.length, pL=p.length;

        var check = function(i,j){
            let sCh = s.charAt(i), pCh = p.charAt(j);
            if(i>=sL){
                if(j>=pL){ return true;}
                if(pCh=='?'){return check(i,j+1);}
                else if(pCh!='?' && p.charAt(j+1)=='?' ){ return check(i,j+2);}
                else {return false;}
            }
            else {
                if(j>=pL){ return false;}
                if (p.charAt(j+1)=='?'){
                    if(sCh==pCh){ return check(i,j+2) || check(i+1,j+2);}
                    else{ return check(i,j+2);}
                }else{return sCh==pCh && check(i+1,j+1);}
            }
        };
        return check(0,0);
    };
    
    // cases.forEach()
    console.log(match('a','a'));
    console.log(match('ab','a'));
    console.log(match('a','a?'));
    console.log(match('a','a?b'));
    console.log(match('ak','a?ab?k'));

```