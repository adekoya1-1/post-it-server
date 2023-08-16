const router = require('express').Router()

const { getAllStories, getAStory } = require("../controller/stroyController")


// routes to grt stories regardless of user
router.get('/', getAllStories)
router.get('/:storyId', getAStory)

module.exports = router