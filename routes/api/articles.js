const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches to "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

// Matches to "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .post(articlesController.comment)
  .put(articlesController.update)
  .delete(articlesController.remove);

// Matches to "/api/articles/:id"
router
  .route("/comments/:id")
  .delete(articlesController.removeComment);

module.exports = router;
