const express = require('express');
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(express.json());

// DONE: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = 'd10faaa95d1bd2be4f4eee720b4764a23da9e3f68f7e0e0e51c255bbc2737182';

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const body = req.body;

  // DONE: prove that a name is in the list 
  const isInTheList = verifyProof(JSON.parse(body.proof), body.leaf, MERKLE_ROOT);
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
