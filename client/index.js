const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const prompt = require('prompt-sync')();





const serverUrl = 'http://localhost:1225';

async function main() {
  // DONE: how do we prove to the server we're on the nice list? 
  const niceListTree = new MerkleTree(niceList);
  const name = prompt('What is your name? ');
  const proof = niceListTree.getProof(niceList.indexOf(name));

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // DONE: add request body parameters here!
    leaf: name,
    proof: JSON.stringify(proof),
  });

  console.log({ gift });
}

main();