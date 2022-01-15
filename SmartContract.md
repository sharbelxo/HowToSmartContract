## Smart Contract
We can write our smart contract directly in a file in our folder. But, since Solidity is always getting updated in terms of compiler etc... it would be better if we write our code on a website called Remix. Here is the link:

https://remix.ethereum.org/

Right click on the contracts folder and create a new file.  
We are going to call it: ```Name.sol```  
The ```.sol``` means the file is a Solidity file.  

Copy and paste the following code into the solidity file, then we are going to learn what each line of code means and does.  
```
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

contract Name {
    string name;

    function getName() public view returns (string memory) {
        return name;
    }

    function setName(string memory _name) public {
        name = _name;
    }

}
```

Make sure no code is underlined RED. If not, on the panel to the left, find the compile button and click it. If no errors occur, you are good to go!  

This above, is what a simple Smart Contract looks like. First, we have the ```// SPDX-License-Identifier: MIT``` line which is put as a comment using ```//```. This line needs to be present at the top of every contract for reasons related to licensing which we don't have to worry about. Next, we have the ```pragma solidity ^0.8.11``` line which is a must at the top of every contract, here we choose the compiler version we need to compile our Smart Contract successfully. Make sure the version you choose here is the identical to that of the ```solc``` dependency we installed previously. Here on this website they have a built-in compiler, but in our project, ```solc``` is our compiler.  

We start writing our contract with the statement ```contract Name```. As you can see, the name of the contract, ironically, is ```Name```. We have a string variable ```name``` which we will create a setter and getter methods for. The getter method is ```getName()``` and we label it as a public method since in Solidity, variables and methods are automatically put as private. Moreover,  we could have made the string ```name``` public and in Solidity, labeling it as public automatically makes it gettable without a seperate method.  
Anywho, this getter method will return a string, the ```name``` variable we created previously. We put it as ```memory``` because much like RAM, memory in Solidity is a temporary place to store data whereas ```storage``` holds data between function calls. The Solidity Smart Contract can use any amount of memory during the execution but once the execution stops, the memory is completely wiped off for the next execution.  

Moreover, the setter method is used to set a name, it is also given a string memory that we called ```_name``` (You can call it anything you want). This method is also public and will set the ```string name``` to the name provided.  

Now, open Visual Studio Code that we downloaded at the beginning of the tutorial. Then, click ```Open Folder``` and choose the folder we created on our desktop and click ```Select Folder```. Now, create another folder and call it ```contracts```. Then right click on it and create a new file and call it ```Name.sol```. Inside that file, paste all the code we have written on Remix IDE and save it either manually or by clicking ```ctrl + s```.  

Now that we have our contract ready, we need to prepare the files needed to compile, test, amnd deploy our Smart Contract.

See you there! 
