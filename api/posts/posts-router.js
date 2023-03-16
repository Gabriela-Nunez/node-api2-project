// implement your posts router here
const express = require('express')
const Post = require('./posts-model')

const router = express.Router()

//ENDPOINTS

router.get('/', async (req, res) => {
  Post.find()
  .then(posts => {
    res.json(posts)
  })
  .catch(err => {
    res.status(500).json({
      message: "The posts information could not be retrieved",
      err: err.message,
      stack: err.stack
    })
  })
})

module.exports = router