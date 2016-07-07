'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {

  helloWorld (request, reply) {
    reply('Hello Trails.js !')
  }

  index (request, reply) {
    reply.view('index')
  }

  login (request, reply) {
    reply.view('login')
  }

}
