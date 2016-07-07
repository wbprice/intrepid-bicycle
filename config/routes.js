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

  {
    method: 'GET',
    path: '/coursework',
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
   * Coursework Routes
   */

  {
    method: [ 'POST' ],
    path: '/coursework',
    handler: 'CourseworkController.upload'
  },

  /**
   * Get Signed URL for s3 uploads
   */

  {
    method: [ 'GET' ],
    path: '/signS3',
    handler: 'S3signController.getSignedUrl'
  },

  {
    method: [ 'POST' ],
    path: '/verify',
    handler: 'AuthController.verify'
  }

]
