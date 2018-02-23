# express-typescript-boilerplate
This repository is boiler-plate for nodejs express with typescript. Scripts for nodemon watching while compiling with typescript in watch mode is included


# Usage

1. Clone and run "npm install".

# Making production build

* To make production build simply run "npm run build". This will:
    1. Set node environment to 'production'.
    2. Compiles typescript to javascript and outputs in "ts-dist".
    3. Webpack is invoked which bundles everything and emit a single file in "prod/server.js"

# Spinning server in watch mode:

* To start server in watch mode simply run "npm run serve". This will
  1. Set node environment to 'development'.
  2. Starts Ts-Server in watch mode, which continuosly compiles to javascript on save.
  3. Nodemon is activated in '--inspect' mode.
  
# Features:

1. Typescript automatic compilation is integrated which provides strict type checking.
2. Nodemon is integrated which continuously looks for file changes and re-serve it. (need to run "serve" first).
3. Webpack is used to bundle the end produce of typescript compiled file.


# Test
1. Serve the application using "npm run serve".
2. By default, port 3000 is used. Go to "localhost:3000/api/test".
3. You should be able to see "{message: 'Hellop world'}" on your browser.
