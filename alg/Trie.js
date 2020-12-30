

function Trie() {

  function Node() {
    this.isEnd = false;
    this.letters = new Map();
  }

  // console.log(this);
  this.root = new Node();
  this.insert = function (word) {

    let i = 0, node = this.root;
    while (i < word.length) {
      if (!node.letters[word[i]]) {
        node.letters[word[i]] = new Node();
      }
      node = node.letters[word[i]];
      i++;
    }
    node.isEnd = true;
  }

  this.search = function (word) {
    let i = 0, node = this.root;
    while (i < word.length) {
      // console.log(node);
      node = node.letters[word[i++]];
      if (!node) {
        return false;
      }
    }
    return node.isEnd;
  }

  this.startsWith = function (word) {
    let i = 0, node = this.root;
    while (i < word.length) {
      // console.log(node);
      node = node.letters[word[i++]];
      if (!node) {
        return false;
      }
    }
    // return true;
    return !node.isEnd;
  }
}

let trie = new Trie();
trie.insert('app');
console.log(trie.search('app'));
console.log(trie.startsWith('app'));
console.log(trie.startsWith('ap'));
console.log(trie.startsWith('ac'));
// console.log(this);