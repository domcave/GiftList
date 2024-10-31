/* 
    This script simply generates the Merkle Root of the niceList.json file and prints it to the console.
    This was done per the project instructions so I could manually copy/paste the Merkle Root into the server index.js file.
*/

const MerkleTree = require("./utils/MerkleTree.js");
const niceList = require("./utils/niceList.json");

const niceListTree = new MerkleTree(niceList);
console.log(niceListTree.getRoot());