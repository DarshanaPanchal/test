ANGULARJS UNIT TESTING:

- Make one folder named “Myapp” and copy the files: scope.html, controller.js and angular.min.js
- Create directory “test” for creating test files (Myapp/test/*.js)
- Copy test.js to Myapp/test/
(Download these files from https://sites.google.com/a/auberginesolutions.com/ilab-information/testing)

- Install node.js from http://nodejs.org/ or install through command line:
	
FOR MAC:
	
	- If you're using the excellent homebrew (http://github.com/mxcl/homebrew) package manager, you can install node with one command: “brew install node”
	- Otherwise, follow the below steps:
	- Install Xcode.(https://developer.apple.com/xcode/)
	- Install git.(https://help.github.com/mac-git-installation/)
	- Run the following commands:
	- git clone git://github.com/ry/node.git
	  cd node
	 ./configure
	 make
	 sudo make install

For WINDOWS:
	- Currently, you must use cygwin to install node. To do so, follow these steps:
	- Install cygwin.
	- Use setup.exe in the cygwin folder to install the following packages:
	  devel -> openssl
	  devel -> g++-gcc
	  devel -> make
	  python -> python
	  devel -> git
	- Open the cygwin command line with Start > Cygwin > Cygwin Bash Shell.
	- Run the below commands to download and build node.
	  git clone git://github.com/ry/node.git
	  cd node
	  ./configure
	  make
	  sudo make install

For UBUNTU:

	- Install the dependencies:
	- sudo apt-get install g++ curl libssl-dev apache2-utils
	- sudo apt-get install git-core
	- Run the following commands:
   	  git clone git://github.com/ry/node.git
	  cd node
	  ./configure
	  make
	  sudo make install

	- To verify installation, type “node” through command line
	- Now verify npm installation , type "npm" through command line

	- Install karma through npm :
	  First navigate to the app folder (cd C:/…/Myapp)
	  Type  “npm install karma”
	
	- Install jasmine
	  Type “npm install karma-jasmine”
	
	- Install karma chrome launcher to run the test
	  “npm install karma-chrome-launcher”
	
	- Install karma Firefox launcher to run the test
	  “npm install karma-firefox-launcher “
	
	- Install bower for plugins
	  “npm install bower”
Note: Bower requires Node and npm and Git.
	
	- Install angular-mocks through bower
	  ”bower install angular-mocks”
	
	- To install other dependencies
	  “npm install”
 

- To run the App, you just need to run the “scope.html” file present in the Myapp folder.
- To run the test-cases, you need to follow the steps given below:
	- Create a config file [karma.conf.js] in the app folder :-
	  -Using command prompt navigate to the folder in which your app is present (e.g: cd C:/…/Myapp)
	  -Now run the command “karma init”, and follow the steps given below: 
	
	   1. Which testing framework do you want to use? Press tab to list possible options. Enter to move to the next question.
> jasmine
	   2. Do you want to use Require.js? This will add Require.js plugin. Press tab to list possible options. Enter to move to the next question.
> no
	   3. Do you want to capture any browsers automatically? Press tab to list possible options. Enter empty string to move to the next question.
> Chrome
> Firefox
	   4. What is the location of your source and test files? You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js". Enter empty string to move to the next question.
> angular.min.js
> bower_components/angular-mocks/angular-mocks.js
> controller.js
> test/test.js
	   5. Should any of the files included by the previous patterns be excluded? You can use glob patterns, eg. "**/*.swp". Enter empty string to move to the next question.
>
	   6. Do you want Karma to watch all the files and run the tests on change? Press tab to list possible options.
> yes

Config file generated at "C:\...\Myapp\karma.conf.js".

- Now run the command “karma start karma.conf.js” to run the config file (which will run the test-cases present in the test.js file).

