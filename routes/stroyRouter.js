const router = require("express").Router();

const {
  getAUserStory,
  getAllUserStories,
  deleteStory,
  editStory,
  createStory,
} = require("../controller/stroyController");



// route for user
router.route("/").get(getAllUserStories).post(createStory)
router.route("/:storyId").get(getAUserStory).patch(editStory).delete(deleteStory)



module.exports = router
