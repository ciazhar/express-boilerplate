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
