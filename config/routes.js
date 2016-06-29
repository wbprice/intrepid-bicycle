/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Render the HelloWorld view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.index'
  },

  {
    method: 'GET',
    path: '/admin',
    handler: 'ViewController.index'
  },

  {
    method: 'GET',
    path: '/registration',
    handler: 'ViewController.index'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },

  {
    method: [ 'POST' ],
    path: '/signup',
    handler: 'SnsController.signup'
  },

  /**
   * Student Routes
   */

  {
    method: [ 'POST' ],
    path: '/student/register',
    handler: 'StudentController.register'
  },

  {
    method: [ 'GET' ],
    path: '/student/list',
    handler: 'StudentController.list'
  },

  {
    method: [ 'DELETE' ],
    path: '/student',
    handler: 'StudentController.delete'
  }

]
