datatable-mongoose-example
==========================
Working Demo of npm module mongoose-datatable (https://github.com/eherve/mongoose-datatable). 

Based on article http://blog.dephyned.com/2014/01/24/using-jquery-datatables-with-nodejs-and-mongodb-using-mongoose-datatables/

Prerequisites
================

  - MongoDB
  - NodeJS
  - NPM
  - Bower


Installation
===============

```sh
git clone https://github.com/lepazmino/mongoose-datatable-demo.git
cd mongoose-datatable-demo && npm install
bower install

```

Database seeding
================
Using node-mongo-seeds, for more info check: (https://github.com/toymachiner62/node-mongo-seeds)
Run the command:

```sh
seed
```

The file seed.json contains the database that will be populated using the .json files on /seeds/
The collection will have the name of the file. Note: Letter case is important.

In this case, test_seed is used, and the collection is reservations

Starting the server
=================
```sh
npm start
```

Open up a browser and head to http://localhost:3000
