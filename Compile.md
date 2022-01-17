## Compiling The Smart Contract
In this part of the tutorial, we are going to prepare the file needed to compile the Smart Contract.  

So, we have to first create a file inside the main directory/folder (MyFirstSmartContract). This file should be called ```compile.js```.

Lets first copy and paste these lines of code into the ```compile.js``` file and then we are going to learn what each line of that code is for:

```
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const namePath = path.resolve(__dirname, 'contracts', 'Name.sol');
const source = fs.readFileSync(namePath, 'utf8');
```
