const express = require('express')
const router = express.Router()
const blogController = require('./../controller/blog')

router.post('/publish', blogController.publishBlog)
router.post('/getBlogList', blogController.getBlogList)
router.get('/getBlogInfo', blogController.getBlogInfo)

module.exports = router
