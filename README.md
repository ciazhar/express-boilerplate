# Express Workshop

## Install Node using NVM

### 1. Install NVM

```bash
curl https://raw.githubusercontent.com/creationix/nvm/v0.24.0/install.sh | bash
```

### 2. List available node version

```bash
nvm ls-remote
```

### 3. Install node based on version

```bash
nvm install `node_version`
```

## Generate project

### 1. Generate Project NPM

```bash
npm initt
```

### 2. Install Express Dependency

```bash
npm install express
```

### 3. Install Express Genrator

```bash
npm install express-generator -g
```

### 4. Generate Project Express

```bash
express
```

### 5. Update All Dependency

```bash
npm install
```

## Run Node Project

```bash
npm start
```

Your application will run in port 3000

## Install Nodemon

> Nodemon is tool for hot deploy Node application.
Just install nodemon using this command

```bash
npm install nodemon -s
```

Then config your __package.json__ file, in `start` commad, change `node` with `nodemon` like this :

```json
"scripts": {
    "start": "nodemon ./bin/www"
},
```

## Using Sequalize

> Sequalize is ORM for Node.
Just install sequalize using this commad

```bash
npm install sequelize -s
npm install sequelize-cli -g
```

Then you can generate sequalize in your project using this command

```bash
sequelize init
```

## Install dotEnv

> Dot Env is a file for restore global variable.
Just install dotEnv using this commad

```bash
npm install dotenv -s
```

### Config Database in .env

First off all create file named __.env__. Then copy this boilerplate.

```env
NODE_ENV = development
DB_USERNAME = user
DB_PASSWORD = pass
DB_DATABASE = express
DB_HOST = 127.0.0.1
DB_DIALECT = mysql
```

Then add dotEnv to __app.js__ using this code :

```js
require('dotenv').config()
```

Because json file is not flexible to change variable inside it, then rename `config/config.json` to `config.js` like this :

```js
require('dotenv').config()

module.exports =
{
  "development": {
    "username": process.env.DB_USERNAME || '',
    "password":  process.env.DB_PASSWORD || '',
    "database":  process.env.DB_DATABASES || '',
    "host":  process.env.DB_HOST || '',
    "dialect": process.env.DB_DIALECT || '',
    "logging":true
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

And config your __models/index.js__ like this :

```js
var config    = require(__dirname + '/../config/config.js')[env];
```

## Add MySQL Dependency

Add mysql dependency using this command

```bash
npm install mysql2 -s
```

## Create model and migrate it in Sequelize

First create model using this command

```bash
sequelize model:generate --name User --attributes name:String, password:String
```

Then migrate it using this command

```bash
sequelize db:migrate
```

### Create Controller

First define your controller in __controller/UserController.js__. Here i write some code to displaying error message

```js
let model =  require('../models')

module.exports={
    create : function(req,res,next){
        let result={
            'success':false,
            'status':'ERROR',
            'msg':'SOMETHING WENT WRONG'
        }
        res.json(result)
    }
}
```

Then route your controller to __router/users.js__

```js
let userController = require('../controller/UserController')
router.get('/create',userController.create)
```

And register your router in __app.js__

```js
var users = require('./routes/users');
app.use('/user', users);
```

To access this create user you can use __GET__ in `http://localhost:3000/user/create`