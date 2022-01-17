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
The path module will help us build a path from the ```compile.js``` file to the ```Name.sol``` file we created earlier. We use this path module so that we get cross-platform compatibility (Linux, Windows, macOS). To generate this path, we write the ```namePath``` constant as written above. The paramater ```__dirname``` takes us from the root directory of our computer to the directory "MyFirstSmartContract".  

Now we need to read the raw source code of our contract. That is why we create the constant ```source```. It takes as a parameter, the path ```namePath``` and the type of encoding which is UTF-8.

Now, we need to write the compile statement fro the Solidity compiler. First, we get the ```solc``` module just like the 3rd line of code. To compile the raw source code of our contract, we will extract it and put give it as input to the ```compile``` method. That is why we will have this ```input``` constant that will contain the source and then we will feed it to the ```compile``` method. After that we will try to see it in the terminal just to make sure our work is correct before compiling it officially. That is why we will wrap it up in a ```console.log(...)```.
