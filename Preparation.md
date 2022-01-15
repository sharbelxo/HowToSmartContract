# Preparations & Installations
Before we start this step-by-step tutorial, make sure you install Node.js and Git.  

## Installing Node.js
Please make sure you have installed the LTS (Long Term Support) version of Node.js: 

https://nodejs.org/en/download/  

We do not recommend installing the Current release as this often will include bugs or breaking changes that many libraries may not have fully resolved. When you install Node.js it will automatically install npm which is a CLI tool that we will use frequently throughout this tutorial.

## Installing Git
You will also need to have Git installed on your system.

### Windows Users:
Install Git For Windows using the link below. This will also install the GitBash terminal which is helpful as it will allow you to type the same commands as shown in the tutorial. GitBash would replace the use of the Command Prompt or Powershell.  

https://git-scm.com/download/win  

### macOS Users:  
Run the following command in your terminal:  
```
xcode-select --install
```

### Linux(Ubuntu) Users:  
In your terminal run:  
```
sudo apt-get update

sudo apt-get install git
```

## Check-Up:  
To make sure you have Node.js and Git installed successfully on your system. Run the following in your terminal (Command Prompt).
```
node -v

git version
```
