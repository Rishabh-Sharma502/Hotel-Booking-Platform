const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
 
  const Listing = require("../models/listing.js");
  const  Review = require("../models/review.js");
const { validateReviews, isLoggedIn , isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js")


// REVIEWS 
// POST ROUTE
router.post("/", isLoggedIn, validateReviews , wrapAsync(reviewController.createReview))

router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview))

module.exports = router ;