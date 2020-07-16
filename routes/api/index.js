const router = require("express").Router();
const bookRoutes = require("../../models/books");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;