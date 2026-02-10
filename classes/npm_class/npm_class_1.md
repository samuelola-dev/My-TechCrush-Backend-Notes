<!-- What is npm - The defualt package manager for node.js -->
NPM - Node Package Manager. It is a command line tools CLI

<!-- We have npm repository where we see or test packages -->
<!-- We don''t have to build our express or JWT or package -->
<!-- People have taken efforts to build and package for others to use it in their own project -->

<!-- NPM repository - www.npmjs.com -->
<!-- You can search for so many packages, if you don't want to use express you can build your own with nodejs -->
<!-- NPM is not the only place for packages, we have yarn, pnpm -->

<!-- For this cohort we are using NPM as our package manager -->
<!-- For the cli we say this  -->

# npm -v

<!-- this is the CLI -->

<!-- pmpm is useful because you don't have to reinstall packages. so whatever package you use for project A you can use it for
project B -->

<!-- npm is available for other like frontend, mobiledev, game dev -->

<!-- NPM Commands, very crucial -->
# https://docs.npmjs.com/cli/v6/commands/

<!-- Before we start, we need to intialise your node project -->

# npm init      

<!-- npm init will ask you question -->

# npm init -y 

<!-- this will not ask any question -->

<!-- The next thing we want to do is install a package -->

# npm install package-name or
# npm i packackage-name

<!-- Everything is stored in package.json file -->
<!-- Whenever we install a package it creates a new key or property called dependencies -->

<!-- Everything for our package is stored in the node_module folder -->

<!-- There is package, module and dependencies -->

<!-- Dependencies are packages that our project depend on or we need for our package -->
<!-- A package is not a dependecies if the project does not depend on it -->

<!-- Inside node_modules folder we have packages that express.js depends on -->
<!-- Even those packages express.js depend on also depends on other packages -->
<!-- It's like a chain , tree or a pyramid connection -->

<!-- PacKage.lock.json is a more elaboate version of package.json -->
<!-- package.json will only show the package install -->

<!-- but package.lock.json will show everything like the depencies and how they link to each other -->

#   Common question what does package.lock.json do

<!-- It helps to track sub packages, tie their versions -->

<!-- Apart from installing, we have Project Dependencies and Development Dependencies -->

<!-- Project dependicies are dependencies that if they sre not in your project, your project will not work -->

<!-- Development dependencies are only need will building project  -->
<!-- Like when you want to run or test, because novody run test on servers -->

<!-- When you go on project production, you don't need dev dependencies -->

<!-- Example of dev dependencies -->

# npm install package-name --save-dev

<!-- OR -->

# npm i -D package-name

<!-- Exampe is Jest and TypeScript and nodemon -->

<!-- If you notice the package.json a new key devDependencies is added -->

<!-- We can also say we want to install a particular version of our dependencies -->

<!-- We want to install JWT version 8.1.0 -->

# npm install package-name@version

<!-- Latest version of a latest version -->

# npm install package-name@latest

<!-- We can also unistall a package -->

# npm unistall package-name

<!-- We can also update packages -->
<!-- This also updates the package.lock.json -->

# npm update

<!-- If we want to list all our sub packages -->

# npm list 

<!-- We also specify the name of that package -->

# npm list express

<!-- in the script we can run a test script -->

# npm run scriptName

<!-- Everything we run is bash -->

<!-- Everything about a projects, its author, description, main entry point is in the package.json -->

<!-- Production dependencies is in dependencies: {} -->
<!-- Development dependencies is in devDependencies : {} -->

<!-- Note when you update a package, you have to do a lot of work changing things like functions -->
<!-- Dont't try to auto update -->

<!-- SemVer - sematic versioning is a versioning system that uses three-part version number which are -->

<!-- MAJOR.MINOR.PATCH -->
<!-- 4.1.2 -->

<!-- MAJOR is the new version which is 4 -->
<!-- MINOR is just adding new functionalities which is 1-->
<!-- PATCH is for fixing bugs which is 2-->

<!-- When just fi -->














