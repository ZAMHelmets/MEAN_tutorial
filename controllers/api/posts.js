/**
 * Created by Aule on 1/12/15.
 */
var Post = require('../../models/post')
//add an app object which used to be referenced in server.js
var router = require('express').Router()

// get data
router.get('/', function (req, res, next) {
    Post.find(function(err, posts) {
        if (err) { return next(err) }
        res.json(posts)
    })
})

// submits data
router.post('/', function (req, res, next) {
    //build a new model of schema username and body
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    })

    // save model above and send a json representation of it
    // if there's an error, the next call will pass it to Express to pass on to the client
    post.save(function (err,post) {
        if (err) { return next(err) }
        res.status(201).json(post)
    })
})

module.exports = router