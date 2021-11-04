const router = require("express").Router()
const itemController = require("../controllers/post")

router.get("/", itemController.getPosts)
router.post("/create", itemController.createPost)
router.put("/update/:id", itemController.updatePost)
router.delete("/delete/:id", itemController.deletePost)

module.exports = router