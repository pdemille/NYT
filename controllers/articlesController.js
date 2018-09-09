const db = require("../models");

// Defines methods for articlesController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .populate("comment")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Article
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  comment: function(req, res) {
    db.Comment
      .create(req.body)
      .then(function(dbComment) {
        // If you create comment, find an Article w/ an `_id` = to `req.params.id`. Update Article to be connected w/ new comment
        // { new: true } tells query that we want it to return the updated User -- since it returns the original by default
        // Since mongoose query returns a "promise", we can chain another `.then` that receives the result ofthe query
        return db.Article.findOneAndUpdate({ _id: req.params.id }, {$push: { comment: dbComment._id }}, { new: true });
      })
      .then(function(dbArticle) {
        res.json(dbArticle);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  removeComment: function(req, res) {
    db.Comment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
