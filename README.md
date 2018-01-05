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

> Nodemon is tool for hot deploy Node application
Just install nodemon using this command

```bash
npm install nodemon -s
```

config your package.json, in `start` commad, change `node` with `nodemon` like this :

```json
"scripts": {
    "start": "nodemon ./bin/www"
},
```

## Using Sequalize

> Sequalize is ORM for Node
Just install sequalize using this commad

```bash
npm install sequelize -s
npm install sequelize-cli -g
sequelize init
```

### Install dotEnv

> Dot Env is a file for restore variable

```bash
npm install dotenv -s
```

config .env

```env
NODE_ENV = development
DB_USERNAME = user
DB_PASSWORD = pass
DB_DATABASE = express
DB_HOST = 127.0.0.1
DB_DIALECT = mysql
```

change config/config.json to config.js like

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

and config your `models/index.js` like

```js
var config    = require(__dirname + '/../config/config.js')[env];
```

### Create script migration Sequilize

```bash
sequelize model:generate --name User --attributes name:String
npm install mysql2 -s
sequelize db:migrate
```

### Create Controller

```js
create : function(req,res,next){
        let result={
            'success':false,
            'status':'ERROR',
            'msg':'SOMETHING WENT WRONG'
        }
        res.json(result)
}
```

controller

```js
router.get('/create',userController.create)
```

app js

```js
var users = require('./routes/users');
app.use('/users', users);
```