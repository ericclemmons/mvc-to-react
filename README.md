# Moving from MVC to React

> Eric Clemmons' Space City JS 2015 "Moving from MVC to React"


This project has [step-by-step commits][commits] introducing the following
concepts in [React][react]:

- Running [React][react] on the server.
- Rendering a simple `<Component />`.
- Passing `props` into a `<Component />`.
- Rendering [React][react] on the client.
- Serializing data on the server & using it on the client.
- Using `context` to pass data to deeply-nested children.
- Simple testing using [Mocha][mocha]


## Dependencies

- [Node](https://nodejs.org/)
- [nvm](https://github.com/creationix/nvm)


## Installation

After cloning/download this project:

```shell
$ nvm install
$ nvm use
$ npm install
```

Now that the correct version of Node & NPM dependencies are installed:

```shell
$ npm start
```

Open the project in your editor, then go to the following URLs and see
how it all works:

- <http://localhost:3000>
- <http://localhost:3000/foo>
- etc.


[commits]: https://github.com/ericclemmons/mvc-to-react/commits/master
[mocha]: http://mochajs.org/
[react]: http://facebook.github.io/react/
