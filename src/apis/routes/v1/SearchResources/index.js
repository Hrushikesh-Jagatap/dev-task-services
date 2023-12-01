const express = require('express');
const router = express.Router();
const SearchResourcesController = require('@controllers/v1/SearchResources');
router.get('/search/resource', async (req, res, next) => {
    try {
        const result = await SearchResourcesController.searchResources(req, res, next);
    } catch (error) {
        next(error)
    }
});
module.exports = router;
