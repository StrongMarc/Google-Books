const router = require("express").Router();
const bookRoutes = require("../../models/book");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;