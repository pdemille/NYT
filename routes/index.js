const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

//However...... if we suppose no API routes are hit then send the React app
// router.use(function(req, res) {
//   // res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

module.exports = router;
