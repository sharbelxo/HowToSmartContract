# Structure

The first thing we want to do, is to create a directory or folder, where our code and files will be placed.  

You can do that, simply, by creating a new folder on your Desktop or anywhere you want. For the sake of this tutorial, we will be creating the folder on our Desktop. 

## Tip:  
Instead of creating a new folder manually like this:  
insert pic  
You can create a folder using your Command Prompt.  
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
Next, we are going to use the command ```npm``` made available to us to use when we downloaded Node.js  

We are going to start setting up this mini-project by running the following, in the Command Prompt:  
```
npm init
```
insert pic  

keep on clicking ENTER until the setup is done and no more questions are being asked.  
The command we just used, created a ```Package.json``` file in our folder, this file will be a placeholder for all the settings and dependencies we install and use in our project.  
## Installing Dependencies:
We are going to install the dependencies needed for the project and learn what each one of them does. We are installing these inside this folder (since we used cd MyFirstSmartContract to move into the project). And that is why you need to reinstall them if you create another project in another folder later on in the future.
First, run the following statement in your terminal:  
(make sure you are in the same directoey)
```
npm install solc web3 mocha ganache-cli @truffle/hdwallet-provider
```
Now, we are going to learn what each dependency is used for:  
### solc
### web3
### mocha
### ganache-cli
### @truffle/hdwallet-provider
