// implement your posts router here
const express = require('express')
const Post = require('./posts-model')

const router = express.Router()

//ENDPOINTS

router.get('/', async(req, res) => {
  Post.find()
  .then(posts => {
    res.json(posts)
  })
  .catch(err => {
    res.status(500).json({
      message: "The posts information could not be retrieved",
      err: err.message,
      stack: err.stack,
    })
  })
})

router.get('/:id', async(req, res) => {
  const { id } = req.params
  Post.findById(id)
  .then(post => {
    if(!post) {
      res.status(404).json({
        message: "The post with the specified ID does not exist" 
      })
    }
    res.json(post)
  })
  .catch(err => {
    res.status(500).json({
      message: "The post information could not be retrieved",
      err: err.message,
      stack: err.stack,
    })
  })
})


module.exports = router