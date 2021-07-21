# Testing POC

* [AVA](https://github.com/avajs/ava)
* [sinon](https://sinonjs.org/)
* [nyc](https://github.com/istanbuljs/nyc)

## Setup

Start up a MongoDB docker container:

```sh 
docker run --name mongodb -p 27017:27017 -d mongo:4.4.4-bionic
```

To install node dependecies:

```sh 
npm i
```

## Start application

Running app:

```sh 
npm start
```

Running app in dev mode:

```sh 
npm run dev
```

## Testing

```sh 
npm test
```

## Coverage report

```sh 
npm run report
```
