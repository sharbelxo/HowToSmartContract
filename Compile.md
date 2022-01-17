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

The compile file is written in JavaScript and hence, the chage in syntax.  

In the first 3 lines of code we are creating 3 constants where we require the 3 modules: path, fs, solc.  
The path module will help us build a path from the ```compile.js``` file to the ```Name.sol``` file we created earlier. We use this path module so that we get cross-platform compatibility (Linux, Windows, macOS). To make this path, we write the ```namePath``` constant as written above. The attribute ```__dirname``` takes us from the root directory of our computer to the directory "MyFirstSmartContract".  

