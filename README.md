# Angular Boilerplate with ui-router, Gulp, SCSS, and Node.js

This repository is a simple set up for an Angular single page site. There is already a file structure setup in the public folder that gulp will use to compile and compress your code and move to and create a Dist folder. The node server is set up ready to connect to an SQL databse using massive.

## Installing

After cloning the repo run NPM install to install the needed modules. If you need to install Node.js and NPM you can download the software here: [Node offical site](https://nodejs.org/en/download/).

## Using Gulp

Gulp is set up to compile and compress your HTML, SCSS, and JS. It will move it all into another folder called Dist that it will create and manage. When you run the node server it is set up already to use that folder for hosting.

To run gulp type 'gulp' in the root directory of the repo and it will run all the tasks found in the gulpfile.js and keep recompiling every time a change to a file has been created. If you create a new file you will need to stop gulp by pressing ctrl-c and then rerun gulp.

Gulp is also set up to compile your ES6 javascript to ES5, so feel free to use all the ES6 you want.

## Using SCSS

