# Structure

The first thing we want to do is to create a directory or folder where our code and files will be placed.  

You can do that, simply, by creating a new folder on your Desktop or anywhere you want. For the sake of this tutorial, we will be creating the folder on our Desktop. 

## Tips  
Instead of creating a new folder manually from your Desktop,
you can create a folder using your Command Prompt. Open your Command Prompt and follow along.  

First, you move to your Desktop by running:
```
cd Desktop
```
After that, you run:
```
mkdir FOLDER_NAME
```
Of course, instead of FOLDER_NAME, write the name of the folder you want to create.  
##

Lets say you named it MyFirstSmartContract.  

On the same Command Prompt window, we will move into the folder by running:  
```
cd MyFirstSmartContract
```  
## Summary
![folder](https://user-images.githubusercontent.com/72712113/149627081-ace46ad2-0ff4-4ed3-9167-c16e188396ff.png)  
##
Next, we are going to use the command ```npm``` made available to us to use when we downloaded Node.js  

We are going to start setting up this mini-project by running the following, in the Command Prompt:  
```
npm init
```

keep on clicking ENTER until the setup is done and no more questions are being asked.  

The command we just used, created a ```Package.json``` file in our folder, this file will be a placeholder for all the settings and dependencies we install and use in our project.  
## Installing Dependencies:
We are going to install the dependencies needed for the project and learn what each one of them does. We are installing these inside this folder (since we used cd MyFirstSmartContract to move into the project). And that is why you need to reinstall them if you create another project in another folder later on in the future.  

First, run the following statement in your terminal:  

```
npm install solc web3 mocha ganache-cli @truffle/hdwallet-provider
```
Now, we are going to learn what each dependency is used for:  
### solc:  

solc.js is a Node.js library and command-line tool that is used to compile solidity files.  
Solidity is an object-oriented, high-level programming language we are going to use to write/implement our Smart Contract.

### web3:  

web3.js is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.

### mocha:

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
We are going to use mocha when testing our Smart Contract.  

### ganache-cli:

Ganache is a personal blockchain for rapid Ethereum and Corda distributed application development. You can use Ganache across the entire development cycle; enabling you to develop, deploy, and test your dApps in a safe and deterministic environment.  

The command-line tool, ganache-cli (formerly known as the TestRPC), is available for Ethereum development.  

### @truffle/hdwallet-provider:

HD Wallet-enabled Web3 provider. We use it to sign transactions for addresses derived from a 12 or 24 word mnemonic.  
We are going to see a mnemonic later in the tutorial.  

##
After we have installed all the dependencies, we can now open the Package.json file in our folder and the dependencies will all be there.  

However, we have to edit the "test" attribute by changing it  

from ```"test": "echo \"Error: no test specified\" && exit 1"```  

to ```"test": "mocha"```

Your Package.json file should look like this:  

![dependencies](https://user-images.githubusercontent.com/72712113/149627533-90510b24-6cc5-4f0d-a117-ab8de3300a42.png)  

DO NOT worry if the versions of the dependencies are different are higher/newer than the ones you see in the picture above. It would be just because those libraries get updated a lot.

Finally, save the file.
